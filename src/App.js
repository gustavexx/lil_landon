import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';



class App extends React.Component {
  render(){
    return (
      <div className='App'>
        
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
