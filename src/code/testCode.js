import React from 'react';


const testCode = [
    {
        challengeTitel:'Challenge ',
        code: 
        `public class StudentDetails { 
    public int StudentAge() 
        { 
            int age = 0; 
            age = age + 5; 
            return age; 
            
        } 
          
    public static void main(String args[]) 
        { 
            StudentDetails obj = new StudentDetails(); 
            System.out.println("Student age is : " + age); 
        }
    }`,
        description:'Can you find what is wrong with the codes here and correct it (print the value of a)?',
        hint: "Recall the scope of local variables\n and what StudentAge() does",
        expectedResult: "Student age is : 5\n"
        
    },
    {
        challengeTitel:'Challenge ',
        code: 
        `public class test {
    public static void main(String[] args) {
        int val = 10;
        val = val++ +1 ;

        System.out.println(val == someValueHere);
    }    
}`,
        description:'What is the final result of val? Please replace "someValueHere" with your result',
        hint: "Rember increment sign does not change variable value immediately",
        expectedResult: "true\n"
        
    },
    {
        challengeTitel:'Challenge ',
        code: 
        `public class test {
    public static void main(String[] args) {
        String s1 = "fun";
        String s2 = "kids";
        String s3 = ;
        System.out.println(s3);
    }    
}`,
        description:'Tim wants s3 to be concatenation of s1 and s2, but he does not know what to do, can you help him? ',
        hint: "Recall what method does the concatenation job",
        expectedResult: "funkids\n"
        
    },
    {
        challengeTitel:'Challenge ',
        code: 
        `public class test {
    public static void main(String[] args) {
        int val=0;
        for(int i=0;i<5;i++){
            val++;
            i++;
        }
        System.out.println(val == SomeValueHere);
    }    
}`,
        description:'How many times val is incremented (ie. what is result of val after the for loop)?',
        hint: "observe how local variables i changes in the loop",
        expectedResult: "true\n"
        
    },
    {
        challengeTitel:'Challenge ',
        code: 
        `public class test {
    public static void main(String[] args) {
        int[] array = {5,2,7,4,2,9};
        int sum = 0;
        // your codes go here
        //
        //
        //
        //
        // 
        System.out.println("Sum is: "+sum);
    }    
}`,
        description:'James is looking for the summation of numbers in the array, can you help him?',
        hint: "Recall the combination of loop and arrays as well as how to access element in arrays",
        expectedResult: "Sum is: 29\n"
        
    }
];

export {testCode};