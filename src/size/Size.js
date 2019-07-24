import React, { Component } from 'react';
import windowSize from 'react-window-size';
 
class ScreenSize extends Component {
componentDidMount(){
        if(this.props.windowWidth <= 200){
            console.log('hello')
        }
    }
  render() {
    return (
      <p>
        Screen width is: {this.props.windowWidth}
        <br />
        Screen height is: {this.props.windowHeight}
      </p>
    );
  }
 
}
 
export default windowSize(ScreenSize);