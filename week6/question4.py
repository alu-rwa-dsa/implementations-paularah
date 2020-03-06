import unittest, from unittest import TestCase
def det(matrice):
    n=len(matrice)
    if n>2:
        i=1
        t=0
        sumdet = 0
        while t<=n-1:
            d={}
            t1=1
            while t1<=n-1:
                m=0
                d[t1]=[]
                while m<=n-1:
                    if m==t:
                        u=0
                    else:
                        d[t1].append(matrice[t1][m])
                    m+=1
                t1+=1
            l1=[d[x] for x in d]
            sumdet = sumdet + i * (matrice [ 0][ t]) * (det(l1))
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

