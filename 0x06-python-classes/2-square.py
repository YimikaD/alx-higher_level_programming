#!/usr/bin/python3
"""create class square"""


class Square:
"""define class and instantiates private instance attribute size"""
    def __init__(self, size=0):
        if type(size) is not integer:
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self._size = size
