import unittest
from question_one import Array
from question_two import DynamicArray
from question_three import *
from question_four import AssArray
from question_four import AssArray

class TestDsa(unittest.TestCase):

    def test_question_one(self):
        arr = Array(4, 3, 4, 7)
        self.assertEqual(arr.arr_len(), 3)
        self.assertEqual(arr.values, [3, 4, 7])
        self.assertEqual(arr.elem, [3, 4, 7, None])
        arr.arr_set(2, 1)
        self.assertEqual(arr.values, [3, 4, 1])
        self.assertEqual(arr.elem, [3, 4, 1, None])
        self.assertEqual(arr.arr_get(2), 1)
        # testing a couple of edge cases
        arr = Array(4)
        self.assertEqual(arr.arr_len(), 0)
        self.assertEqual(arr.values, [])
        self.assertEqual(arr.elem, [None, None, None, None])
        arr = Array(0)
        self.assertEqual(arr.arr_len(), 0)
        self.assertEqual(arr.elem, [])
        # # testing for Out of bound IndexError exceptions
        with self.assertRaises(IndexError):
            arr.arr_set(1, 1)
        with self.assertRaises(IndexError):
            arr.arr_get(6)
        # testing correct data type input
        with self.assertRaises(ValueError):
            arr = Array('3', 4)
        with self.assertRaises(ValueError):
            arr = Array(3, 4, 5, '6', 7)

    def test_question_two(self):
        arr = DynamicArray(3, 1, 5)
        arr.arr_add(9)
        self.assertEqual(arr.values, [3, 1, 5, 9])
        arr.arr_del()
        self.assertEqual(arr.values(), [3, 1, 5])

    # def test_question_three(self):
    #     arr = DynamicArray(3, 9, 1, 4)
    #     self.assertEqual(contains(arr, 4), True)

    def test_question_four(self):
        a_arr = AssArray('name', 'paul')
        self.assertRaises(a_arr.as_array, ('name', 'paul'))






         




