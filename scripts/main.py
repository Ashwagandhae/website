# program to loop through "in"
# and run the process_file fn on each file
# and saves results in out_dir

import os
import colorsys
import json
import zipfile
from file_watcher import Watcher


def set_current_color(string):
    return string.replace("white", "currentColor")


def split_lines(string):
    lines = string.splitlines()
    return list(filter(None, lines))


def remove_svg_tags(lines):
    return list(
        filter(
            lambda x: not (x.startswith("<svg")) and not (x.startswith("</svg")), lines
        )
    )


def remove_background_rect(lines):
    return lines[1:]


def hex_to_hsl(hex):
    # convert to rgb
    rgb = tuple(int(hex.lstrip("#")[i : i + 2], 16) for i in (0, 2, 4))

    # convert to hsl
    hls = colorsys.rgb_to_hls(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
    hls = (int(hls[0] * 360), int(hls[1] * 100), int(hls[2] * 100))
    return (hls[0], hls[2], hls[1])


def get_color(lines):
    hex = lines[0].split('fill="')[1].replace('"/>', "")
    return hex_to_hsl(hex)


def clear_dir(dir_path):
    files = os.listdir(dir_path)
    for file in files:
        os.remove(os.path.join(dir_path, file))


def get_file_strings_from_zip(zip_path):
    ret = []
    with zipfile.ZipFile(zip_path) as zip_ref:
        for name in zip_ref.namelist():
            if not (name.endswith(".svg")):
                continue
            with zip_ref.open(name, "r") as f:
                data = f.read().decode("utf-8")
                ret.append((name, data))
    return ret


def write_files_to_dir(files, dir_path):
    for (name, data) in files:
        with open(os.path.join(dir_path, name), "w") as f:
            f.write(data)


def change_file_extension(name, ext):
    # include filenames with . in them
    return ".".join(name.split(".")[:-1]) + "." + ext


# actual functions
def process_color_icon_file(name, data):
    lines = split_lines(data)
    lines = remove_svg_tags(lines)
    color = get_color(lines)
    lines = remove_background_rect(lines)
    name = change_file_extension(name, "json")
    return (
        name,
        json.dumps(
            {
                "color": color,
                "svg": "\n".join(lines),
            }
        ),
    )


def process_icon_file(name, data):
    data = set_current_color(data)
    lines = split_lines(data)
    lines = remove_svg_tags(lines)
    name = change_file_extension(name, "json")
    return (
        name,
        json.dumps(
            {
                "svg": "\n".join(lines),
            }
        ),
    )


def process_files(in_zip, out_dir, process_fn):
    clear_dir(out_dir)
    files = get_file_strings_from_zip(in_zip)
    files = list(map(lambda file: process_fn(*file), files))
    write_files_to_dir(files, out_dir)


def process_skill_icon_files():
    in_dir = "scripts/in/skill_icons.zip"
    out_dir = "src/routes/skills/content/icons"

    process_files(in_dir, out_dir, process_color_icon_file)


def process_project_icon_files():
    in_dir = "scripts/in/project_icons.zip"
    out_dir = "src/routes/projects/content/icons"

    process_files(in_dir, out_dir, process_color_icon_file)


def process_icon_files():
    in_dir = "scripts/in/icons.zip"
    out_dir = "src/lib/icons"

    process_files(in_dir, out_dir, process_icon_file)


def do_everything():
    process_skill_icon_files()
    process_project_icon_files()
    process_icon_files()


if __name__ == "__main__":
    do_everything()
    # w = Watcher(do_everything, "in")
