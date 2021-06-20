import React, { Component } from 'react'; //클래스 방식 적용
import './App.css';

// 외부 컴포넌트 호출(이름 일치시키기)
import Navigation from './components/navi';
import Content from './components/content';
import Subject from './components/subject';

// 함수방식과 클래스방식 중 클래스방식 채택
class App extends Component {
  
  // 초기화
  constructor(props) {
    super(props);
    this.state = { // state 초기화
      subject:{title:'WEB', sub:'world wide web!!'},

      contents:[
        {id:1, title:'HTML', desc:'HTMl is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'},
      ],

      content:{title:'HTML', desc:'HTMl is HyperText Markup Language'},
    }
  }

  render() {
    return (
      <div className="App">
        {/* 하위 컴포넌트 불러오기 */}
        {/* title을 통해 props이용 */}
        <Subject 
          title={this.state.subject.title} sub={this.state.subject.sub}
        />
        <Navigation data={this.state.contents} />
        <Content title={this.state.content.title} desc={this.state.content.desc} />
      </div>
    );
  }
}

export default App;
