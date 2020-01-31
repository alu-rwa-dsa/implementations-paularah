"""
A simple function that replaces all the whitespaces in a string with a
single whitespace using regular expressions
"""
import re


def white_space(text):
    if type(text) != str:
        raise ValueError
    # Whitespace pattern we're searching for
    pattern = re.compile(r'\s+')
    return re.sub(pattern, ' ', text)
