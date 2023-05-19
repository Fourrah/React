import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, createContext, useContext } from 'react';
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

function Carr(props) {
  return <h2>I am a {props.brand.model} !!!!</h2>;
}

function Garage2() {
  const carName = {model: "Ford", name: "suv"}
  return (
    <>
      <h1>who lives in my garage??</h1>
      <Carr brand = {carName}/>
    </>
  )
}

function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  }

  return <button onClick={(event) => shoot("Goal!!!!", event)}>Take the shot!</button>
}

function MissedGoal() {
  return <h1>Missed!!!</h1>;
}
function MadeGoal() {
  return <h1>Goal~~~~</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  )
}

function Garage3(props) {
  const cars1 = props.cars2;
  return (
    <>
      <h1>Garage</h1>
      {cars1.length > 0 &&
        <h2>you have {cars1.length} cars in your garage.</h2>
      }
    </>
  )
}
const cars3 = ['Truck', 'Bus', 'Taxi', 'Aude'];

function Cars(props) {
  return <li>I am a {props.brand}</li>
}

function Garage4() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>who lives in Garage???</h1>
      <ul>
        {cars.map((car) => <Cars key={car.id} brand={car.brand} />)}
      </ul>
    </>
  )
}

function MyForm() {
  const [inputs, setInputs] =useState("");

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text"
          name='username'
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input 
          type="number"
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type='submit'/>
    </form>
  )
}

function MyForm2() {
  const [myCar, setMyCar] = useState("Ford"); //맨 처음 고정값으로 Ford를 보여줌

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>my favorite color is {color}</h1>
      <button type='button' onClick={() => setColor("blue")}>Click</button>
    </>
  )
}

function Me() {
  const [name, setName] = useState("Sara");
  const [hobby, setHobby] = useState("swimming");
  const [birth, setBirth] = useState("1998");

  return (
    <>
      <h1>Hello, My name is {name}</h1>
      <p>my hobby is {hobby}</p>
      <p>my birth is {birth}</p>
    </>
  )
}

function AboutMe() {
  const [me, setMe] = useState({
    name: "Sara",
    hobby: "swimming",
    birth: "1998"
  });

  const updateHobby = () => {
    setMe(previousState => {
      return {...previousState, hobby: "studying"}
    });
  }
  return (
    <>
      <h1>Hi, My name is {me.name}</h1>
      <p>my hobby is {me.hobby}</p>
      <p>my birth is {me.birth}</p>
      <button type='button' onClick={updateHobby}>click</button>
    </>
  )
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000)
  }, []);

  return <h1>I've rendered {count} times!</h1>
}

function Timer2() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c+ 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return(
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return(
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return(
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return(
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
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
root.render(<Garage2 />);
root.render(<Football />);
root.render(<Goal isGoal={false} />);
root.render(<Garage3 cars2={cars3} />);
root.render(<Garage4 />);
root.render(<MyForm />);
root.render(<MyForm2 />);
root.render(<FavoriteColor />);
root.render(<AboutMe />);
root.render(<Timer />);
root.render(<Timer2 />);
root.render(<Component1 />);
