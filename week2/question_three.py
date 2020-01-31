"""
Input a list of lists and return a single list with each element occurring exactly once.
"""


def single_list(n):
    final = []
    for i in n:
        for j in i:
            if j in final:
                pass
            else:
                final.append(j)
    return final
