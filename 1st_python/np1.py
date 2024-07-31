import numpy as np
import time
import sys
start = time.time()
SIZE = 10000000

l1 = range(SIZE)
l2 = range(SIZE)

a1 = np.arange(SIZE)
a2 = np.arange(SIZE)

result = [(x+y) for x,y in zip(l1,l2)]
print("python list took: ", (time.time()-start)*1000)

start = time.time()
result = a1 + a2
print("numpy took: ", (time.time()-start)*1000)


a = np.array([1,2,3])
print(a)
b = np.array([4,5,6])
print(a+b)
print(a-b)