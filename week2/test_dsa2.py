import unittest
from question_one import white_space
from question_two import dict_count
from question_three import single_list
from question_four import missing_elem
from question_five import list_range


class TestDsa(unittest.TestCase):

    def test_question_one(self):
        self.assertEqual(white_space("hello  my   friend"), "hello my friend")
        # Testing a couple of edge cases.
        self.assertEqual(white_space("    "), " ")
        self.assertEqual(white_space("    hi there!"), " hi there!")
        # testing exceptions case
        with self.assertRaises(ValueError):
            white_space(12222)

    def test_question_two(self):
        # testing for ideal case
        self.assertEqual(dict_count("car"), {"c": 1, "a": 1, "r": 1})
        # testing for some edge cases
        self.assertEqual(dict_count("  ,"), {" ": 2, ",": 1})

    def test_question_three(self):
        # testing ideal case
        self.assertEqual(single_list([[2, 3, 1], [4, 1, 2], [5, 2, 4]]), [2, 3, 1, 4, 5])
        # testing a couple of edge cases
        self.assertEqual(single_list([[" "]]), [" "])
        self.assertEqual(single_list([[]]), [])

    def test_question_four(self):
        # testing ideal case
        self.assertEqual(missing_elem([8, 1, 2, 3], [8, 3, 1]), 2)
        # testing edge cases
        self.assertEqual(missing_elem([], []), None)

    def test_question_five(self):
        # testing for ideal case
        self.assertEqual(list_range(3), [1, 2, 2, 3, 3, 3])
        # testing for edge cases:
        self.assertEqual(list_range(0), [])
        with self.assertRaises(ValueError):
            list_range("3")


if __name__ == "__main__":
    unittest.main()




