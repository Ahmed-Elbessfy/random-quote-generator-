import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote: 'Life begins at the end of your comfortzone',
      author : 'Neale Donald Walsch',
    }
    this.focusBtn = React.createRef();
    this.getNewQuote = this.getNewQuote.bind(this)
  }
  componentDidMount(){
    this.focusBtn.current.focus();
  }
  // Generate new quote function
  getNewQuote(){
    const num = Math.floor(Math.random()*102);
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => this.setState({
      quote : res.data.quotes[num].quote ,
      author : res.data.quotes[num].author,
    }))
  }

  render() {
    const tweetPath = `https://twitter.com/intent/tweet?text=${this.state.quote}%20%0A--%20${this.state.author}`
    return (
      <div className="App">
      <h1>random quote generator</h1>
        <div id='quote-box'>
          <button id='new-quote' className='btn' tabIndex={1} ref={this.focusBtn} onClick={this.getNewQuote}>new quote</button>
          <a className="twitter-share-button btn" tabIndex={2} id='tweet-quote' href={tweetPath} target='_blank' rel="noopener noreferrer" >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <Quote quote={this.state.quote} author={this.state.author} />
        </div>
      </div>
    );
  }
}

export default App;
