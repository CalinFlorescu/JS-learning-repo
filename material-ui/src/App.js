import React, { Component, Fragment } from 'react';
import './App.css';
import {Header, Footer} from './Layouts'
import Exercises from './Exerciser'



export default class App extends React.Component {
  render() {
    return <div style={{height: '100vh'}}>
      <Header />

      <Exercises />

      <Footer />
    </div>
  }
}