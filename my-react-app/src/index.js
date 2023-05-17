import React from 'react';
import ReactDOM from 'react-dom/client';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myList);
root.render(myElement);
root.render(myElement2);
root.render(myElement3);
root.render(myElement4);
root.render(myElement5);
root.render(myElement6);
root.render(myElement7);