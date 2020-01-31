"""
Input 2 lists - listA with n elements and listB which has all elements of listA except
one (but the rest are in the same order). Outputs the missing element. E.g.
f([8,1,2,3],[8,1,3]) outputs 2
"""


def missing_elem(first_list, second_list):
    # Looping through the first list and searching for the values in the second list
    for i in first_list:
        if i in second_list:
            pass
        else:
            return i
