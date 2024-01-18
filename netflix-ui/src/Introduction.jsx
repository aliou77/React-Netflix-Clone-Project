// import logo from './logo.svg'; // variable contenant une image
import './App.css';

function Intro(props) {
  return (
    <div className="App">
      <h1>Bonjour {props.name} </h1>
    </div>
  );
}

export const Hello = (props) =>{
  return (<div>
    <h2>Hello mon pt {props.name}</h2>
  </div>);
}

export const Button = (props) =>{
  return (<div>
    <button className='btn'>{props.name}</button>
  </div>);
}
export default App;
