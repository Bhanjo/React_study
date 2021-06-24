import React, { Component } from 'react'; //클래스 방식 적용
import './App.css';

// 외부 컴포넌트 호출(이름 일치시키기)
import Navigation from './components/navi';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/subject';
import Control from './components/Control';

// 함수방식과 클래스방식 중 클래스방식 채택
class App extends Component {
  
  // 초기화
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = { // state 초기화
      mode:'read', //mode지정
      selected_content_id: 2,
      subject:{title:'WEB', sub:'world wide web!!'},
      welcome:{title:'Welcome', desc:'hello React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTMl is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'},
      ],

      content:{title:'HTML', desc:'HTMl is HyperText Markup Language'},
    }
  }

  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id += 1;
        
        // 좋은 방법이 아님(push는 원본을 바꾼다) => concat을 사용한다
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc,});

        // concat 이용(concat은 원본을 바꾸지 않는다)
        var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc,})

        this.setState({contents:_contents,});
      }.bind(this)} />
    }
    return (
      <div className="App">
        {/* 하위 컴포넌트 불러오기 */}
        {/* title을 통해 props이용 */}
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome'
            });
          }.bind(this)} //이벤트생성
        />

        <Navigation onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)} data={this.state.contents} />
        
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>

        {/* 모드 값에 따라 컴포넌트가 바뀌도록 한다 */}
        {_article}

      </div>
    );
  }
}

export default App;
