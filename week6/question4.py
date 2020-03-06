import unittest
from unittest import TestCase

def det(matrice):

    dep = len(matrice)
    if dep > 2:
        i = 1
        t = 0
        sumdet = 0
        while t <= dep-1:
            hold={}
            vx = 1
            while vx <= dep-1:
                m = 0
                hold[vx] = []
                while m <= dep-1:
                    if m == t:
                        u = 0
                    else:
                        hold[vx].append(matrice[vx][m])
                    m += 1
                vx += 1
            ech=[hold[x] for x in hold]
            sumdet = sumdet + i * (matrice [ 0][ t]) * (det(ech))
            i = i*(-1)
            t +=1
        return sumdet
    else:
        return (matrice[0][0] * matrice[1][1] - matrice [0][1] * matrice [1][0])


class TestDet(TestCase):

    def testdet2x2(self):
        self.assertEqual(det([[3,2], [2,3]]), 5)

    def testdet3X3(self):
       self.assertEqual(det([[1, 4, 3], [2, 1, 2], [2, 4, 1]]), 19)

if __name__ == '__main__':
    unittest.main()

