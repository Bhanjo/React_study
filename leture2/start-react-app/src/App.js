import React, { Component } from 'react'; //클래스 방식 적용
import './App.css';

// 함수방식과 클래스방식 중 클래스방식 채택
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}
class Navigation extends Component {
  render() {
    return (
      <nav><ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
      </ul></nav>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 컴포넌트 불러오기 */}
        <Subject />
        <Navigation />

        Hello, React!!
      </div>
    );
  }
}

export default App;
