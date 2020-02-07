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
        self.elem = []
        Array.size = 10
        # Continously increasing the size until the size accomodates the element length
        while len(initial_values) > Array.size:
            Array.size *= 2
        for i in initial_values:
            self.elem.append(i)

    # A method for adding a value to the end of an array
    def arr_add(self, elem):
        index = self.arr_len()
        print(index)
        self.arr_set(index, elem)

    # A method for del the last element in an array
    def arr_del(self):
        self.elem = self.elem[0:self.arr_len()]


