import React, { Component } from 'react'; //클래스 방식 적용
import './App.css';

// 외부 컴포넌트 호출(이름 일치시키기)
import Navigation from './components/navi';
import Content from './components/content';
import Subject from './components/subject';

// 함수방식과 클래스방식 중 클래스방식 채택
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 컴포넌트 불러오기 */}
        <Subject title="WEB" sub="world wide web!!" /> {/* title을 통해 props이용 */}
        <Navigation />
        <Content title="HTML" desc="HTMl is HyperText Markup Language" />
      </div>
    );
  }
}

export default App;
