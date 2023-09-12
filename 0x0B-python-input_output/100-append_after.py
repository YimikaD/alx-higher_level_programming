#!/usr/bin/python3
"""Funtion that insert a line of text to a file."""


def append_after(filename="", search_string="", new_string=""):
    """Insert text after each line containing a given string in a file.

    Args:
        filename: Name of the file.
        search_string: String to search for in the file.
        new_string: String to insert.
    """
    text = ""
    with open(filename) as r:
        for line in r:
            text += line
            if search_string in line:
                text += new_string
    with open(filename, "w") as w:
        w.write(text)
