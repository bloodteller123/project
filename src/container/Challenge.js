import React, { Component } from 'react'

import AceEditor from "react-ace";

import { Card,
         Button, 
         Comment, 
         Header,
         Form,
         Image } from 'semantic-ui-react'

import moment from 'moment'

import "brace/mode/java";
import "brace/theme/github";
import "brace/theme/kuroir";


import {testCode} from '../code/testCode.js'

const localStyle={
    card:{
        marginTop:50,
        marginLeft:30
    }
}

export default class Challenge extends Component {

    constructor(props){
        super(props);
        this.state = {
            output: '',
            correct: false,
            displayHintToggle: false,
            tCode: testCode[this.props.number].code,
            description: testCode[this.props.number].description,
            challengeNumber:this.props.number+1,
            title: testCode[this.props.number].challengeTitel,
            hint: testCode[this.props.number].hint,
            comments: localStorage.getItem('comments')?JSON.parse(localStorage.getItem('comments')):this.createArray(), // later we can add local storage,]
            text:'',
            userName: localStorage.getItem('userName')?localStorage.getItem('userName'):"Tom"
        };

    }

    createArray = () => { // 2d array ? array of comments for each lesson
        let temp = [];
        for(let i=0;i<testCode.length;++i){
            temp[i] = [];
        }
        return temp;
    }

    updateCode = (newVal) => {
        this.setState({
            tCode:newVal
        });
    }

    submitCode = () => {
        let program = {
            script : this.state.tCode,
            language: "java",
            versionIndex: "0",
            clientId: "2bc4d2bda4e96f084b352c2853979917",
            clientSecret:"88d3924d889586db923d5635b0488848efd6ca3eac5d391fdda2d04977b447b3"
        };
        fetch('https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/execute', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(program)
        }).then(response=>{
            console.log(response);
            return response.json();
        }).then(response=>{
            let isCorrect = false;
            if(response.memory === null){
                console.log("error");
                console.log(response.output);
            }else{
                console.log(response.output);
                isCorrect = (String(response.output) === String(testCode[this.props.number].expectedResult))
            }
            this.setState({
                output:response.output,
                correct: isCorrect
            });
        })
    }

    addReply = () => {
        console.log(this.state.text);
        let newO = {newComment:this.state.text,name:this.state.userName,time:new Date()}
        
        this.setState(prevS=>{
            let copyValues = [...prevS.comments];
            copyValues[this.props.number].push(newO);
            return{
                comments:copyValues,
                text:''
            }
        },()=>{
            console.log(this.state.comments);
            localStorage.setItem('comments',JSON.stringify(this.state.comments))})
    }

    render() {

        const { comments,
                text,
                title,
                challengeNumber,
                hint,
                description,
                displayHintToggle} = this.state;

        const hintButton = (
            <Button content='Hint' onClick={()=>this.setState(prevS=>{
                return {
                    displayHintToggle: !prevS.displayHintToggle
                }
            })}/>
        )

        const CommentBlock = (commentObject) => {
            return (
                <Comment>
                    {!(Object.entries(commentObject).length === 0 && commentObject.constructor === Object)?
                    <Comment>
                        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                        <Comment.Content>
                            <Comment.Author as="a">{commentObject.name}</Comment.Author>
                            <Comment.Metadata>
                                <div>{moment(commentObject.time).fromNow()}</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p>{commentObject.newComment}</p>
                            </Comment.Text>
                            <Comment.Actions>
                                <Comment.Action onClick={() => console.log("hha")}>
                                Reply
                                </Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        {console.log(commentObject)}
                        </Comment>
                        :
                        null
                    }
                </Comment>
            )
        }
        return (
            <div>
                <div className="body" style={{paddingTop:20,paddingBottom: 50,backgroundColor:'#F3F3F3'}}>
                    <div style={{textAlign:'center',fontSize:20}}>some header here</div>
                    <div style={{display:'flex'}}>
                        <div className="leftContainer" style={{display: 'inline-block'}}> 
                            <div>
                                <div>
                                    <Card style={{marginLeft:30}}>
                                        <Image src={require("../assets/images.jpeg")} size="small" style={{marginLeft:70}}/>
                                        <Card.Content>
                                            <Card.Header textAlign='center'>{title+ challengeNumber}</Card.Header>
                                        </Card.Content>
                                    </Card>
                                </div>
                                <div>
                                    <Card
                                        header="Challenge Description"
                                        description={description}
                                        style={localStyle.card}
                                    />
                                </div>
                                <div>
                                    <Card
                                        header="Hint"
                                        description={displayHintToggle?hint:''}
                                        style={localStyle.card}
                                        extra={hintButton}
                                    />
                                </div>
                                <div className="back">
                                    <Card
                                            description="Forget the concepts in the lessons?"
                                            style={localStyle.card}
                                            extra={<Button primary style={{marginLeft:30}} >Back to lesson</Button>}
                                        />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="rightContainer" style={{marginLeft:30,display:'inline-block'}}> 
                            <div className="editorContainer">
                                <AceEditor
                                        mode="java"
                                        theme="kuroir"
                                        name="editor"
                                        width='700px'
                                        onChange={this.updateCode}
                                        fontSize={16}
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={this.state.tCode}
                                        setOptions={{
                                        enableBasicAutocompletion: false,
                                        enableLiveAutocompletion: false,
                                        enableSnippets: false,
                                        showLineNumbers: true,
                                        tabSize: 2,
                                        }}
                                />
                            
                            </div>
                            <div className="additionContainer">
                                <div>
                                    <div className="submit">
                                        <Button secondary size='large' style={{marginTop:10}} onClick={this.submitCode}>Submit</Button>
                                    </div>
                                    <div style={{marginTop:30,marginLeft:-30}}> 
                                        <div className="output" style={{float:'left'}}>
                                            <Card
                                                header="Output: "
                                                description={this.state.output}
                                                style={{marginLeft:30}}
                                            />
                                        </div>
                                        <div className="nextLesson" style={{float:'right'}}>
                                            {
                                                this.state.correct?<Button primary size='big'>Next</Button>:<div></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                        <div className="rightMostContainer" style={{marginLeft:30,marginTop:30}}> 
                            <div>
                                <Comment.Group size="large">
                                <Header as="h3" dividing>
                                    Comments On the Challenge
                                </Header>
                                <Comment>
                                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                                    <Comment.Content>
                                        <Comment.Author as="a">Kobe James</Comment.Author>
                                        <Comment.Metadata>
                                        <div>Yesterday at 12:30AM</div>
                                        </Comment.Metadata>
                                        <Comment.Text>
                                        <p>This has been very useful for my programming study. Thanks as well!</p>
                                        </Comment.Text>
                                        <Comment.Actions>
                                        <Comment.Action onClick={() => console.log("hha")}>
                                            Reply
                                        </Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                        <Comment.Metadata>
                                        <div>5 days ago</div>
                                        </Comment.Metadata>
                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                        <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Comment>
                                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                                    <Comment.Content>
                                        <Comment.Author as='a'>Matt</Comment.Author>
                                        <Comment.Metadata>
                                        <span>Today at 5:42PM</span>
                                        </Comment.Metadata>
                                        <Comment.Text>Ahhh It's so difficult</Comment.Text>
                                        <Comment.Actions>
                                        <a>Reply</a>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment> 
                                    {
                                        comments[this.props.number].map((commentObject,index)=><CommentBlock  {...commentObject}/>)
                                        //<CommentBlock />
                                    }
                                </Comment.Group>
                            </div>
                            <div>
                            <Form reply style={{marginTop:10}}>
                                <Form.TextArea value={text} onChange={(e)=>this.setState({text:e.target.value})}/>
                                <Button onClick={this.addReply} content="Add Reply" labelPosition="left" icon="edit" primary />
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
