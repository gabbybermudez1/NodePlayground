# Learning Python's numpy library via the official documentation and Justin Johnson's Tutorial http://cs231n.github.io/python-numpy-tutorial/ 


import numpy as np


matrix1 = np.eye(3)
matrix2 = np.array([[2,0,0], [0,2,0],[0,0,2]], dtype=np.float64)

# adding matrices - the two produce the same thing
print(matrix2 + matrix1)
print(np.add(matrix1, matrix2))



