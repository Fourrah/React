import React from 'react';
import ReactDOM from 'react-dom/client';
import Car2 from './car.js';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

const myElement = <h1>I love JSX!</h1> //JSX 사용할 때
const myElement3 = <h1>React is {5+5} times better with JSX</h1> //JSX 사용할 때

const myElement2 = React.createElement('h1', {}, 'I do not use JSX!'); //JSX 사용 안할때

const myElement4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myElement5 = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>

  </>
);

const x = 1;

const myElement7 = <h1>{(x) < 10 ? "Hello" : "GoodBye"}</h1>;

const myElement6 = <h1 className='myclass'>Haloddddd</h1>;

function Car() {
  return <h2>Hi, Im a Car!</h2>;
}

function Garage() {
  return (
    <><h1>Who lives in my Garage?</h1><Car /></>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true; //true일 때만 렌더링 됨!
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  //마운트 된 직후에 호출
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  
  //업데이트 되기 전 값을 알려줌
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }

  //업데이트 된 후의 값도 알려줌
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myList);
root.render(myElement);
root.render(myElement2);
root.render(myElement3);
root.render(myElement4);
root.render(myElement5);
root.render(myElement6);
root.render(myElement7);
root.render(<Garage />);
root.render(<Car2 />);
root.render(<Header />);
root.render(<Header2 />);
root.render(<Container />);