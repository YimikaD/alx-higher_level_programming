#!/usr/bin/python3

def print_reversed_list_integer(my_list=[]):

    if if not my_list:
        pass
    else:

        list_len = len(my_list)
        for i in range(1, list_len + 1):
            print("{:d}".format(my_list[list_len - i]))
