# Power Sum

Find the number of ways that a given integer, _X_. can be expressed as the sum of the _N<sup>th</sup>_ power of unique, natural numbers. 
### **Input Format**  

The first line contains an integer _X_.  
The second line contains an integer _N_. 

### **Constraints**  

* 1 ≤ X ≤ 1000  
* 2 ≤ N ≤ 10

### **Output Format**

Output a single integer, the answer to the problem explained above.

### **Sample Input 0**
```
10
2
```
### **Sample Output 0**
```
1
```
### **Explanation 0**
If _X_ = 10 and _N_ = 2, we need to find the number of ways that 10 can be represented as the sum of squares of unique numbers.  

10 = 1<sup>2</sup> + 3<sup>2</sup>  

This is the only way in which 10 can be expressed as the sum of unique squares.
### **Sample Input 1**
```
100
2
```
### **Sample Output 1**
```
3
```
### **Explanation 1**
100 = 10<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup> = 1<sup>2</sup> + 3<sup>2</sup> + 4<sup>2</sup> + 5<sup>2</sup> + 7<sup>2</sup> 

### **Sample Input 2**
```
100
3
```
### **Sample Output 2**
```
1
```
### **Explanation 2**

100 can be expressed as the sum of the cubes of 1, 2, 3, 4.  
(1 + 8 + 27 + 64 = 100). There is no other way to express 100 as the sum of cubes.