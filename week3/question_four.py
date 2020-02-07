"""
Associative List Abstract Data Type Implementation
"""

class AssArray:
    def __init__(self, key, value):
        self.as_array = []
        self.insert(key, value)

    def insert(self, key, value):
        for pair in self.as_array:
            if pair[0] == key:
                raise KeyError
        return self.as_array.append((key, value))

    def remove(self, key):
        for pair in self.as_array:
            if pair[0] == key:
                return self.as_array.remove(pair)
        raise KeyError

    def modify(self, key, value):
        for pair in self.as_array:
            if pair[0] == key:
                self.as_array.remove(pair)
                return self.as_array.append((key, value))
        raise KeyError

    def lookup(self, key):
        for pair in self.as_array:
            if pair[0] == key:
                return pair[1]
        return KeyError

    def __str__(self):
        return str(self.as_array)
