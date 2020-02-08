# Importing the predefined Array class
from question_one import Array

"""
IMPLEMENTATION OF THE DYNAMIC ARRAY ABSTRACT DATA TYPE:
This inherits the methods and properties of the Static array 
Implementation Decisions:
1. The size of the array is predefined to 10 and and increased continuously increases
if the length of the specified elements is greater than the size  
"""


# Dynamic array inherits from Static Array class
class DynamicArray(Array):

    # The constructor takes in a variable length of input elements
    def __init__(self, *initial_values):
        # Initialising the parent constructor
        super().__init__(*initial_values)
        self.size = 10
        self.initial_values = initial_values
        self.type_check()
        self.create_arr()
        self.validate()

    def create_arr(self):
        # Continuously increasing the size until the size accommodates the element length
        while len(self.initial_values) > self.size:
            self.size *= 2
    # A method for adding a value to the end of an array
    def arr_add(self, elem):
        index = self.arr_len()
        print(index)
        self.arr_set(index, elem)

    # A method for del the last element in an array
    def arr_del(self):
        self.elem = self.elem[0:self.arr_len()]


f = DynamicArray(9, 4, 6)
print(f.elem)
