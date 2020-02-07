"""
A Static Array Abstract Data Type Implementation
Implementations Decsions:
This mimics the implementation of python's list except that they are static
The ize of the array is initailised at instanciation
This ADT uses zero based indexing
"""


class Array():
    def __init__(self, size, *initial_value):
        """
         The class constructor taking a finite value for the size while the initial input the list
         list are theoritically infinite as long they are less than the specified size.
        """

        # Type checking for size input to be strictly and integer
        if type(size) != int:
            raise ValueError
        self.size = size

        # Type checking to ensure that initial instantiation elements are all integers
        # N/B: The resulting values from the variable arguments in the constructor is a tuple
        try:
            for i in initial_value:
                if type(i) != int:
                    raise ValueError
        except ValueError:
            print('Array elements must be integers!')

        # An empty list that would hold our array elements after validation
        self.elem = []

        # adding our initial values straight to a elem list if the size and length are all
        # specified input corresponds
        if len(initial_value) == size:
            for i in initial_value:
                self.elem.append(i)

        # Initialising the other empty spaces in memory to None if the length of the specified values
        # is less than the size
        elif len(initial_value) < size:
            count = 0
            for i in range(size):
                if count < len(initial_value):
                    self.elem.append(initial_value[i])
                else:
                    self.elem.append(None)
                count += 1
            self.values = self.elem[0:self.arr_len()]
        # Raising a values if the length of the specified elements at instantiation is more
        # than the size
        else:
            raise ValueError

    # Calculating the length of the length of the actual values that have been initialised within  the alloted size
    def arr_len(self):
        length = 0
        for i in self.elem:
            if i is None:
                pass
            else:
                length += 1
        return length

    # A method to set a value to array at a particular index
    def arr_set(self, index, val):
        if index <= (self.arr_len()):
            self.elem[index] = val
            self.val_update()
            # Raising an index error if the index is greater the length of the elements
        else:
            raise IndexError

    def val_update(self):
        self.values = self.elem[0:self.arr_len()]

    # A method to get a value by it index
    def arr_get(self, index):
        if index < self.arr_len():
            return self.values[index]
        else:
            # Raises an in error if the value is greater the length of the elements
            raise IndexError

    def __str__(self):
        return str(self.values)

