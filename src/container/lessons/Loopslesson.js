import React, { Component } from 'react'
import {Grid, Image,Table,Label,Button} from 'semantic-ui-react'

export default class Loopslesson extends Component {
    render() {
        return (
<div className="mainContainer" style={{paddingLeft:70, paddingRight:70, paddingBottom:100}}>
                <p>Lesson 3</p>

                <div style={{fontSize:30}}>
                     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There may be a situation when you need to execute a block of code several number of times. In general, statements are executed sequentially: The first statement in a function is executed first, followed by the second, and so on.<br/>

                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming languages provide various control structures that allow for more complicated execution paths.<br/>

                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A <b>loop</b> statement allows us to execute a statement or group of statements multiple times and following is the general form of a loop statement in most of the programming languages −</p>
<div><Image src={require("../../assets/loop.jpg")} size="large" style={{marginLeft:370}}/></div>
                 
                 </div>
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
                                <Table.Cell><b>while loop</b><br/>Repeats a statement or group of statements while a given condition is true. It tests the condition before executing the loop body.</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>2</Label>
                                </Table.Cell>
                                <Table.Cell><b>foor loop</b><br/>Execute a sequence of statements multiple times and abbreviates the code that manages the loop variable.</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>3</Label>
                                </Table.Cell>
                                <Table.Cell><b>do...while loop</b><br/>Like a while statement, except that it tests the condition at the end of the loop body.</Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    </div>
                 
                <div className="loopControl">
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Loop Control Statements</p></div>
                    <div style={{fontSize:20,marginTop:25}}>Loop control statements change execution from its normal sequence. When execution leaves a scope, all automatic objects that were created in that scope are destroyed.</div>
                    <div style={{fontSize:20,marginTop:15}}>Java supports the following control statements.</div>
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
                                <Table.Cell><b>break statement</b><br/>Terminates the <b>loop</b> or <b>switch</b> statement and transfers execution to the statement immediately following the loop or switch.</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                <Label ribbon>2</Label>
                                </Table.Cell>
                                <Table.Cell><b>continue statement</b><br/>Causes the loop to skip the remainder of its body and immediately retest its condition prior to reiterating.</Table.Cell>

                            </Table.Row>
                        </Table.Body>
                    </Table>
                    </div>
                 
                </div>

                <div className="enhancedLoop">
                    <div style={{fontWeight:'bold',fontSize:30}}><p>Enhanced for loop in Java</p></div>
                    <div style={{fontSize:20,marginTop:25}}>As of Java 5, the enhanced for loop was introduced. This is mainly used to traverse collection of elements including arrays.</div>
                    <div style={{fontWeight:'bold',fontSize:20}}>Syntax</div>
                    <div style={{fontSize:20,marginTop:15}}>Following is the syntax of enhanced for loop −</div>
                        <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"for(declaration : expression) {"}</code><br/>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"// Statements"}</code>
                            <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br/>
                        </div>
                        <div><ul style={{listStyleType: 'none',fontWeight:25,fontSize:25}}><li style={{marginTop:15}}>1.<b>Declaration</b>-The newly declared block variable, is of a type compatible with the elements of the array you are accessing</li><li style={{marginTop:15}}>2.<b>Expression</b>-This evaluates to the array you need to loop through. The expression can be an array variable or method call that returns an array.</li></ul></div>
                        <div style={{marginTop:15}}>
                        <div className="example">
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Example</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                    <code>{"public class Test {"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;{"public static void main(String args[]) {"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"int [] numbers = {10, 20, 30, 40, 50};"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"for(int x : numbers ) {"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.print( x );"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.print(',');"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"String [] names = {'James', 'Larry', 'Tom', 'Lacy'};"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"System.out.print( name );"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" System.out.print(',');"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br/>
                                    <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code><br/>
                                    <code>{"}"}</code><br/>
                            </div>
                        </div>
                        <div style={{marginTop:15, fontSize:20}}>This will produce the following result −</div>
                        <div className='output'>
                            <div style={{fontWeight:'bold',fontSize:30}}><p>Ouput</p></div>
                            <div style={{backgroundColor:'#F3F3F3',paddingLeft:300}}>
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"10, 20, 30, 40, 50,"}</code>
                                <br />
                                <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"James, Larry, Tom, Lacy,"}</code>
                                <br />
                            </div>
                        
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
