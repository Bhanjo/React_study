import "./App.css";
import MyComponent from './MyComponent';

const App = () => {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div style={style}>
      {name === "리액트" ? <h1>{name}hello React!</h1> : <h1>not react..</h1>}
      {/* <MyComponent name="React" /> */}
      <MyComponent name={'리액트'} favNum={8}>리액트</MyComponent>
    </div>
  );
}

export default App;
