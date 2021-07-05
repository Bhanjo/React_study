import { Component } from "react";
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from "./EventPractice";
// import ValidationSasmple from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        {/* 컴포넌트에 ref를 사용 */}
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        {/* 컴포넌트 내부의 매서드 사용 */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
