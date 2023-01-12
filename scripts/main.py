# program to loop through "in"
# and run the process_file fn on each file
# and saves results in out_dir

import os
import colorsys
import json
import zipfile
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

in_dir = "in"
out_dir = "../src/routes/skills/content/icons"


def process_file(data):

    lines = data.splitlines()
    lines = filter(None, lines)
    # remove svg tags
    lines = filter(
        lambda x: not (x.startswith("<svg")) and not (x.startswith("</svg")), lines
    )
    lines = list(lines)
    # get color
    hex = lines[0].split('fill="')[1].replace('"/>', "")
    lines = lines[1:]

    # convert to rgb
    rgb = tuple(int(hex.lstrip("#")[i : i + 2], 16) for i in (0, 2, 4))

    # convert to hsl
    hls = colorsys.rgb_to_hls(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
    hsl = (int(hls[0] * 360), int(hls[2] * 100), int(hls[1] * 100))

    ret = {
        "color": list(hsl),
        "svg": "\n".join(lines),
    }

    return json.dumps(ret)


def process_files():
    print("updating files")
    # remove all files from 'out' folder
    files = os.listdir(out_dir)
    for file in files:
        os.remove(os.path.join(out_dir, file))

    with zipfile.ZipFile("in/data.zip") as zip_ref:
        for file in zip_ref.namelist():
            if not (file.endswith(".svg")):
                continue
            with zip_ref.open(file, "r") as f:
                data = f.read().decode("utf-8")
            result = process_file(data)
            name = file.replace(".svg", ".json")
            with open(os.path.join(out_dir, name), "w") as f:
                f.write(result)


class Watcher:
    DIRECTORY_TO_WATCH = "in"

    def __init__(self):
        self.observer = Observer()

    def run(self):
        event_handler = Handler()
        self.observer.schedule(event_handler, self.DIRECTORY_TO_WATCH, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()

        self.observer.join()


class Handler(FileSystemEventHandler):
    @staticmethod
    def on_any_event(event):
        if event.is_directory:
            return None

        elif event.event_type == "created":
            # Take any action here when a file is first created.
            process_files()

        elif event.event_type == "modified":
            # Taken any action here when a file is modified
            process_files()


if __name__ == "__main__":
    w = Watcher()
    w.run()
