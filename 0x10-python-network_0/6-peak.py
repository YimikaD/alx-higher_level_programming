#!/usr/bin/python3
""" Find peak inside a list of integers """

def find_peak(list_of_integers):
    """ Return peak of a list """
    if not list_of_integers:
        return None
    list_of_integers.sort()
    return list_of_integers[-1]
