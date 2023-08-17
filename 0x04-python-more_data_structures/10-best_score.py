#!/usr/bin/python3

def best_score(a_dictionary):

    if (not a_dictionary):
        return (None)

    best-key = ""
    best_value = 0

    for i, j in a_dictionary.items():
        if(j >= best_value):
            best_Key = i
            best_value = j

    return best_key
