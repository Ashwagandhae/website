import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


class Watcher:
    def __init__(self, fn, directory_to_watch):
        self.observer = Observer()
        event_handler = Handler(fn)
        self.observer.schedule(event_handler, directory_to_watch, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()

        self.observer.join()


class Handler(FileSystemEventHandler):
    def __init__(self, fn):
        self.fn = fn

    def on_any_event(self, event):
        if event.is_directory:
            return None
        elif event.event_type == "created":
            self.fn()
        elif event.event_type == "modified":
            self.fn()
