import React, { Component } from 'react'
import {Grid, Image,Table,Label,Button} from 'semantic-ui-react'

export default class Stringlesson extends Component {
    render() {
        return (
            <div className="mainContainer" style={{paddingLeft:70, paddingRight:70, paddingBottom:100}}>
                <p>Lesson 3</p>

                <div style={{fontSize:30}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strings, which are widely used in Java programming, are a sequence of characters. In Java programming language, strings are treated as objects.

The Java platform provides the String class to create and manipulate strings</p>
                 </div>
                 <div className='createS'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Creating Strings</p></div>
                    <div>
                        <div style={{fontSize:20}}>The most direct way to create a string is to write −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String greeting = 'Hello world!';"}</code>
                        </div>
                        <div style={{fontSize:20}}>Whenever it encounters a string literal in your code, the compiler creates a String object with its value in this case, "Hello world!'.</div>
                    </div>
                    <div style={{marginTop:15}}>
                    <div style={{fontSize:20}}>As with any other object, you can create String objects by using the new keyword and a constructor. The String class has 11 constructors that allow you to provide the initial value of the string using different sources, such as an array of characters.</div>
                    <div className="example">
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>{"public class StringDemo {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"char[] helloArray = { 'h', 'e', 'l', 'l', 'o', '.' };"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String helloString = new String(helloArray);"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println( helloString );"}</code>
                            <br />
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                            <br />
                            <code>{"}"}</code>
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
                 <div className='stringL'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>String Length</p></div>
                    <div style={{fontSize:20,marginTop:15}}>The following program is an example of <b>length()</b>, method String class.</div>
                    
                    <div style={{marginTop:15}}>
                        <div style={{fontSize:20}}>Methods used to obtain information about an object are known as <b>accessor methods</b>. One accessor method that you can use with strings is the length() method, which returns the number of characters contained in the string object.</div>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>{"public class StringDemo {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String palindrome = 'Dot saw I was Tod';"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int len = palindrome.length();"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println( 'String Length is : ' + len );"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                                <br />
                                <code>{"}"}</code>
                            </div>
                        </div>
                        <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                        <div className='output'>
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String Length is : 17"}</code>
                            <br />
                        </div>
                    
                    </div>
                    </div>
                 
                 </div>
                 <div className='concaS'>
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Concatenating Strings</p></div>
                    <div>
                        <div style={{fontSize:20,marginTop:15}}>This returns a new string that is string1 with string2 added to it at the end. You can also use the concat() method with string literals, as in −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'My name is '.concat('Zara');"}</code>
                        </div>

                        <div style={{fontSize:20,marginTop:15}}>Strings are more commonly concatenated with the + operator, as in −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'Hello,' + ' world' + '!'"}</code>
                        </div>

                        <div style={{fontSize:20,marginTop:15}}>which results in −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"'Hello, world!'"}</code>
                        </div>
                        <div style={{fontSize:20,marginTop:5}}>Let us look at the following example −</div>
                    </div>
                    <div style={{marginTop:15}}>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>{"public class StringDemo {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String string1 = 'saw I was ';"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('Dot ' + string1 + 'Tod');"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                                <br />
                                <code>{"}"}</code>
                            </div>
                    </div>
                    <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                    <div className='output'>
                        <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Dot saw I was Tod."}</code>
                            <br />
                        </div>
                    
                    </div>
                 </div>
                 
                 </div>
                 
                 <div className="stringMethods">
                 <div style={{fontWeight:'bold',fontSize:30}}><p>String Methods</p></div>
                 <div style={{marginTop:15, fontSize:20}}>Here is the example of methods supported by String class −</div>
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
                                <Table.Cell><b>char charAt(int index)</b><br/>Returns the character at the specified index.</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>2</Label>
                                </Table.Cell>
                                <Table.Cell><b>int compareTo(Object o)</b><br/>Compares this String to another Object.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>3</Label>
                                </Table.Cell>
                                <Table.Cell><b>int compareTo(String anotherString)</b><br/>Compares two strings lexicographically.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>4</Label>
                                </Table.Cell>
                                <Table.Cell><b>int compareToIgnoreCase(String str)</b><br/>Compares two strings lexicographically, ignoring case differences.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>5</Label>
                                </Table.Cell>
                                <Table.Cell><b>boolean equals(Object anObject)</b><br/>Compares this string to the specified object.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>6</Label>
                                </Table.Cell>
                                <Table.Cell><b>int indexOf(int ch)</b><br/>Returns the index within this string of the first occurrence of the specified character.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>7</Label>
                                </Table.Cell>
                                <Table.Cell><b>int indexOf(String str)</b><br/>Returns the index within this string of the first occurrence of the specified substring.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>8</Label>
                                </Table.Cell>
                                <Table.Cell><b>String toUpperCase()</b><br/>Converts all of the characters in this String to upper case using the rules of the default locale.</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>9</Label>
                                </Table.Cell>
                                <Table.Cell><b>String toLowerCase()</b><br/>Converts all of the characters in this String to lower case using the rules of the default locale.</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>10</Label>
                                </Table.Cell>
                                <Table.Cell><b>String substring(int beginIndex)</b><br/>Returns a new string that is a substring of this string.</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
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
