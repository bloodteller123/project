import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {Grid, Image,Table,Label,Button} from 'semantic-ui-react'

export default class Arraylesson extends Component {
    render() {
        return (
<div className="mainContainer" style={{paddingLeft:70, paddingRight:70, paddingBottom:100}}>
                <p>Lesson 5</p>

                <div style={{fontSize:30}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java provides a data structure, the <b>array</b>, which stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

Instead of declaring individual variables, such as number0, number1, ..., and number99, you declare one array variable such as numbers and use numbers[0], numbers[1], and ..., numbers[99] to represent individual variables.</p>
                 </div>

                 <div className='declareA'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Declaring Array Variables</p></div>
                    <div>
                        <div style={{fontSize:20}}>To use an array in a program, you must declare a variable to reference the array, and you must specify the type of array the variable can reference. Here is the syntax for declaring an array variable −</div>
                        <div style={{fontWeight:'bold',fontSize:20}}>Syntax</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType[] arrayRefVar;   // preferred way."}</code><br/>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType arrayRefVar[];  // works but not preferred way."}</code>
                        </div>
                    </div>
                    <div style={{marginTop:15}}>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{fontSize:20}}>The following code snippets are examples of this syntax −</div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType[] arrayRefVar;   // preferred way."}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType arrayRefVar[];  // works but not preferred way."}</code>
                            </div>
                        </div>
                        <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                        <div className='output'>
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"hello."}</code>
                                <br />
                            </div>
                        
                        </div>
                 </div>
                 
                 </div>
                 
                 <div className='createA'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Creating Arrays</p></div>
                    <div>
                        <div style={{fontSize:20}}>You can create an array by using the new operator with the following syntax −</div>
                        <div style={{fontWeight:'bold',fontSize:20}}>Syntax</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"arrayRefVar = new dataType[arraySize];"}</code>
                        </div>
                        <div style={{fontSize:20}}>The above statement does two things −</div>
                        <div><ul style={{listStyleType: 'none',fontWeight:25}}><li>1.It creates an array using new dataType[arraySize].</li><li>2.It assigns the reference of the newly created array to the variable arrayRefVar.</li></ul></div>
                        <div style={{fontSize:20,marginTop:15}}>Declaring an array variable, creating an array, and assigning the reference of the array to the variable can be combined in one statement, as shown below −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType[] arrayRefVar = new dataType[arraySize];"}</code>
                        </div>
                        <div style={{fontSize:20,marginTop:15}}>Alternatively you can create arrays as follows −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"dataType[] arrayRefVar = {value0, value1, ..., valuek};"}</code>
                        </div>
                        <div style={{fontSize:20,marginTop:15}}>The array elements are accessed through the <b>index</b>. Array indices are 0-based; that is, they start from 0 to <b>arrayRefVar.length-1</b>.</div>             
                    </div>
                    <div style={{marginTop:15}}>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{fontSize:20}}>Following statement declares an array variable, myList, creates an array of 10 elements of double type and assigns its reference to myList −</div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"double[] myList = new double[10];"}</code><br/>
                            </div>
                            <div style={{fontSize:20,marginTop:20}}>Following picture represents array myList. Here, myList holds ten double values and the indices are from 0 to 9.</div>
                            <div><Image src={require("../../assets/java_array.jpg")} size="large" style={{marginLeft:370}}/></div>
                        </div>
                        <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                        <div className='output'>
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"hello."}</code>
                                <br />
                            </div>
                        
                        </div>
                 </div>
                 
                 </div>
                 
                 <div className='processA'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Processing Arrays</p></div>
                    <div>
                    <div style={{fontSize:20}}>When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.</div>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{fontSize:20}}>Here is a complete example showing how to create, initialize, and process arrays −</div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>{"public class TestArray {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String[] args) {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"double[] myList = {1.9, 2.9, 3.4, 3.5};"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// Print all the array elements"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"for (int i = 0; i < myList.length; i++) {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println(myList[i] + '');"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// Summing all elements"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"double total = 0;"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"for (int i = 0; i < myList.length; i++) {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"total += myList[i];"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('Total is ' + total);"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// Finding the largest element"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"double max = myList[0];"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"for (int i = 1; i < myList.length; i++) {"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"if (myList[i] > max) max = myList[i];"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('Max is ' + max);  "}</code><br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br />
                                <code>{"}"}</code>
                            </div>
                        </div>
                        <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                        <div className='output'>
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"1.9"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"2.9"}</code><br/>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"3.4"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"3.5"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Total is 11.7"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Max is 3.5"}</code>
                            <br />
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='returnA'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Returning an Array from a Method</p></div>
                    <div>
                        <div style={{fontSize:20}}>A method may also return an array. For example, the following method returns an array that is the reversal of another array −</div>
                       
                    </div>
                    <div style={{marginTop:15}}>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>{"public static int[] reverse(int[] list) {"}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;{"int[] result = new int[list.length];"}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;{"for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {"}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"result[j] = list[i];"}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br/>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;{"return result;"}</code><br/>
                                <code>{"}"}</code><br/>
                            </div>
                        </div>
                    </div>
                 
                 </div>
                 

                <div className="stringMethods">
                 <div style={{fontWeight:'bold',fontSize:30}}><p>The Arrays Class</p></div>
                 <div style={{marginTop:15, fontSize:20}}>The java.util.Arrays class contains various static methods for sorting and searching arrays, comparing arrays, and filling array elements. These methods are overloaded for all primitive types.</div>
                    <div>
                        <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Sr.No.</Table.HeaderCell>
                            <Table.HeaderCell>Method {'&'} Description</Table.HeaderCell>

                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>1</Label>
                                </Table.Cell>
                                <Table.Cell><b>public static int binarySearch(Object[] a, Object key)</b><br/>Searches the specified array of Object ( Byte, Int , double, etc.) for the specified value using the binary search algorithm. The array must be sorted prior to making this call. This returns index of the search key, if it is contained in the list; otherwise, it returns ( – (insertion point + 1)).</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>2</Label>
                                </Table.Cell>
                                <Table.Cell><b>public static boolean equals(long[] a, long[] a2)</b><br/>Returns true if the two specified arrays of longs are equal to one another. Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal. This returns true if the two arrays are equal. Same method could be used by all other primitive data types (Byte, short, Int, etc.)</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>3</Label>
                                </Table.Cell>
                                <Table.Cell><b>public static void fill(int[] a, int val)</b><br/>Assigns the specified int value to each element of the specified array of ints. The same method could be used by all other primitive data types (Byte, short, Int, etc.)</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>4</Label>
                                </Table.Cell>
                                <Table.Cell><b>public static void sort(Object[] a)</b><br/>Sorts the specified array of objects into an ascending order, according to the natural ordering of its elements. The same method could be used by all other primitive data types ( Byte, short, Int, etc.)</Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    </div>
                 </div>
                 







                 <Link to="/lessons/">
                 <Button
                    style={{ float:'left' ,marginTop: 20, width: 100 }}
                    primary
                    onClick={console.log("hi")}
                    >
                    Lesson Lists
                </Button>
                </Link>
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
