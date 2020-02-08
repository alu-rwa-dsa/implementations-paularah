from question_two import DynamicArray


def contains(array, val):
    for i in range(array.arr_len()):
        if array.arr_get(i) == val:
            return True
    return False


def reverse(array):
    final = []
    count = array.arr_len()
    count -= 1
    while count >= 0:
        x = array.arr_get(count)
        final.append(x)
        count -= 1
    return final

#
# def insert(array, val, index):
#     new_array = DynamicArray(0)
#     end = array.arr_len() - 1
#     final = DynamicArray()
#
#     for i in range(array.arr_len(), index, -1):
#         array.arr_set()
