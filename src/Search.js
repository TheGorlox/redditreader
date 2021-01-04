import React, {Component} from 'react';
import {Container } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
class Search extends Component{
    msg = new SpeechSynthesisUtterance();
    constructor(props){
   
      super(props);
      this.state = {
          items:[],
          isLoaded: false,
      }
      this.textInput = React.createRef(); 
  }
  
 
//   handleChange() {
//     // const value = this.textInput.current.value;
//  }
 apiGet(i){
    let uri = 'https://www.reddit.com/r/'+i+'.json'
    fetch(uri)
      .then(function(data){
        return data.json();
        })
       .then(data=>{
        var posts=data.data.children
        posts.shift()
        posts.shift()
        posts.map(post=>{
            this.msg.text = post.data.title + ". . . ." + post.data.selftext
            window.speechSynthesis.speak(this.msg);
            return this.msg;
            // console.log(post.data.title +'. . . .'+ post.data.selftext)
        })

        return data;
        });
       }
 getinfo(){
    window.speechSynthesis.cancel()
     console.log(this.textInput.current.value);
     this.apiGet(this.textInput.current.value);
     
 }
 
  render(){
      return(
    <Container id='search'>
        <InputGroup className="mb-3" id="sorch">
    <FormControl
      placeholder="Subreddit Name"
      aria-label="Subreddit Name"
      aria-describedby="basic-addon2"
      ref={this.textInput} 
      type="text"
    />
    <InputGroup.Append>
      <Button onClick={()=> this.getinfo()} variant="primary">Button</Button>
    </InputGroup.Append>
  </InputGroup>
  </Container>
      
        
              )};
      }
export default Search;
