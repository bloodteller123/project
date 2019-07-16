import React, { Component } from 'react'


import {Grid, Image,Table,Label,Button} from 'semantic-ui-react'
export default class Variableslesson extends Component {
    render() {
        return (
            <div className="mainContainer" style={{paddingLeft:70, paddingRight:70, paddingBottom:100}}>
                <p>Lesson 2</p>

                <div style={{fontSize:30}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.

You must declare all variables before they can be used. Following is the basic form of a variable declaration −</p>
                 </div>
                 <div className="" style={{}}>
                    <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"data type variable [ = value][, variable [ = value] ...] ;"}</code>
                        <br />
                    </div>
                </div>
                <div style={{fontSize:30,marginTop:15}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here data type is one of Java's datatypes and variable is the name of the variable. To declare more than one variable of the specified type, you can use a comma-separated list.

Following are valid examples of variable declaration and initialization in Java −</p>
                 </div>
                 <div className="" style={{}}>
                    <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int a, b, c;         // Declares three ints, a, b, and c."}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int a = 10, b = 10;  // Example of initialization"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"byte B = 22;         // initializes a byte type variable B."}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"double pi = 3.14159; // declares and assigns a value of PI."}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"char a = 'a';        // the char variable a iis initialized with value 'a'"}</code>
                        <br />
                    </div>
                </div>
                <div >
                    <div style={{fontSize:30}}>There are three kinds of variables in Java −</div>
                    <div style={{marginTop:15}}>
                        <ul style={{listStyleType: 'none',fontWeight:25}}>
                            <li>1.Local variables</li>
                            <li>2.Instance variables</li>
                            <li>3.Class/Static variables</li>
                        </ul>
                    </div>
                </div>
                
                <div className='localV'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Local Variables</p></div>
                    <div style={{marginTop:15}}>
                        <ul style={{listStyleType: 'none',fontWeight:25}}>
                            <li>1.Local variables are declared in methods, constructors, or blocks.</li>
                            <li>2.Access modifiers cannot be used for local variables.</li>
                            <li>3.Local variables are implemented at stack level internally</li>
                            <li>4.Local variables are visible only within the declared method, constructor, or block.</li>
                        </ul>
                    </div>
                    <div className="example">
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>{"public class Test {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public void pupAge() {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int age = 0;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"age = age + 7;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println(Puppy age is :  + age);"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Test test = new Test();"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"test.pupAge();"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                            <code>{"}"}</code>
                        </div>
                    </div>
                    <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                    <div className='output'>
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Puppy age is: 7"}</code>
                            <br />
                        </div>
                    
                    </div>
                </div>
                <div className='instanceV'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Instance Variables</p></div>
                    <div style={{marginTop:15}}>
                        <ul style={{listStyleType: 'none',fontWeight:25}}>
                            <li>1.Instance variables are declared in a class, but outside a method, constructor or any block</li>
                            <li>2.Access modifiers can be given for instance variables</li>
                            <li>3.Instance variables can be declared in class level before or after use.</li>
                            <li>4.Instance variables are created when an object is created with the use of the keyword 'new' and destroyed when the object is destroyed</li>
                            <li>5.When a space is allocated for an object in the heap, a slot for each instance variable value is created.</li>
                        </ul>
                    </div>
                    <div className="example">
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>{"import java.io.*;"}</code>
                            <code>{"public class Employee {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// this instance variable is visible for any child class."}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public String name;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// salary  variable is visible in Employee class only."}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"private double salary;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// The name variable is assigned in the constructor."}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" public Employee (String empName) {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"name = empName;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// The salary variable is assigned a value."}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public void setSalary(double empSal) {"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"salary = empSal;"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// This method prints the employee details."}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public void printEmp() {"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println(name  :  + name );"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println(salary : + salary);"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Employee empOne = new Employee(Ransika);"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"empOne.setSalary(1000);"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"empOne.printEmp();"}</code><br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                            <code>{"}"}</code>
                        </div>
                    </div>
                    <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                    <div className='output'>
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"name  : Ransika"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"salary :1000.0"}</code>
                        </div>
                    
                    </div>
                </div>
                <div className='classV'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Class Variables</p></div>
                    <div style={{marginTop:15}}>
                        <ul style={{listStyleType: 'none',fontWeight:25}}>
                            <li>1.Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block</li>
                            <li>2.There would only be one copy of each class variable per class, regardless of how many objects are created from it.</li>
                            <li>3.Static variables are created when the program starts and destroyed when the program stops.</li>
                            <li>4.Static variables can be accessed by calling with the class name ClassName.VariableName.</li>
                            <li>5.Visibility is similar to instance variables. However, most static variables are declared public since they must be available for users of the class</li>
                        </ul>
                    </div>
                    <div className="example">
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>{"import java.io.*;"}</code>
                            <code>{"public class Employee {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// salary  variable is a private static variable"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"private static double salary;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// DEPARTMENT is a constant"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static final String DEPARTMENT = 'Development ';"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"salary = 1000;"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println(DEPARTMENT + 'average salary:' + salary);"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                            <br />
                            <code>{"}"}</code>
                        </div>
                    </div>
                    <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                    <div className='output'>
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Development average salary:1000"}</code>
                        </div>
                    
                    </div>
                </div>

                 <Button
                    style={{ float:'left' ,marginTop: 20, width: 100 }}
                    primary
                    onClick={console.log("hi")}
                    >
                    Lesson Lists
                </Button>
                 <Button
                    style={{ float:'right' ,marginTop: 20, width: 100 }}
                    primary
                    onClick={console.log("hi")}
                    >
                    Try the challenge!
                </Button>
                
            </div>
        )
    }
}
