"""
A simple function that takes in an an integer n and outputs a list
 with 1 once, 2 twice, 3 three times....n n-times
"""


def list_range(n):
    if type(n) != int:
        raise ValueError
    final = []
    # loops through the range of n and appends every value range(n) times
    for i in range(n+1):
        for j in range(i):
            final.append(i)
    return final


