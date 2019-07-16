import React, { Component } from 'react'

import {Grid, Image,Table,Label,Button} from 'semantic-ui-react'


import {tutorials} from '../../code/tutorial'

export default class Operatorlesson extends Component {

    constructor(props){
        super(props);

        
    }

    render() {
        return (
            <div className="mainContainer" style={{paddingLeft:70, paddingRight:70, paddingBottom:100}}>
                <p>Lesson 2</p>

                <div style={{fontSize:30}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arithmetic operators are used in mathematical expressions in the same way that they are used in algebra. The following table lists the arithmetic operators −

Assume integer variable A holds 10 and variable B holds 20, then −</p>
                 </div>
                 <div>
                    <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Operator</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Example</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>+ (Addition)</Label>
                                </Table.Cell>
                                <Table.Cell>Adds values on either side of the operator.</Table.Cell>
                                <Table.Cell>A + B will give 30</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>- (Subtraction)</Label>
                                </Table.Cell>
                                <Table.Cell>Subtracts right-hand operand from left-hand operand.</Table.Cell>
                                <Table.Cell>A - B will give -10</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>* (Multiplication)</Label>
                                </Table.Cell>
                                <Table.Cell>Multiplies values on either side of the operator.</Table.Cell>
                                <Table.Cell>A * B will give 200</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>/ (Division)</Label>
                                </Table.Cell>
                                <Table.Cell>Divides left-hand operand by right-hand operand.</Table.Cell>
                                <Table.Cell>B / A will give 2</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>% (Modulus)</Label>
                                </Table.Cell>
                                <Table.Cell>Divides left-hand operand by right-hand operand and returns remainder.</Table.Cell>
                                <Table.Cell>B % A will give 0</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>++ (Increment)</Label>
                                </Table.Cell>
                                <Table.Cell>Increases the value of operand by 1.</Table.Cell>
                                <Table.Cell>B++ gives 21</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>-- (Decrement)</Label>
                                </Table.Cell>
                                <Table.Cell>Decreases the value of operand by 1.</Table.Cell>
                                <Table.Cell>B-- gives 19</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                 </div>
                 <div className="example">
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                    <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                    <code>{"public class Test {"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int a = 10;"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int b = 20;"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('a + b = ' + (a + b) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('a - b = ' + (a - b) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('a * b = ' + (a * b) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('b / a = ' + (b / a) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('b % a = ' + (b % a) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('a++ = ' + (a++) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('b-- = ' + (b--) );"}</code>
                    <br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// Check the difference in c++ and ++c"}</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int c = 25;"}</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('c++ = ' + (c++) );"}</code><br />
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.println('++c = ' + (++c) );"}</code><br />
                    <code>{"}}"}</code>
                </div>
                </div>
                <div className="output" style={{marginTop:30}}>
                <div style={{fontWeight:'bold',fontSize:30}}><p>Output</p></div>
                    <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"a + b = 30"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"a - b = -10"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"a * b = 200"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"b / a = 2"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"b % a = 0"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"a++   = 10"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"b--   = 11"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"c++   = 25"}</code>
                        <br />
                        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"++c   = 27"}</code>
                        <br />
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
