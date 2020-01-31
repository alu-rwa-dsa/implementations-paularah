"""
A simple function that takes in a string input and returns a dictionary with
the number of occurences of each character.
"""


def dict_count(string):
    # An empty dictionary to hold the output of the function
    output = {}
    # looping the the string input and handling each character depending
    # the number of occurrence as a key in the output dictionary
    for char in string:
        output[char] = output[char] + 1 if char in output else 1
    return output


