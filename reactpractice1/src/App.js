import logo from './logo.svg';
import './App.css';

function Message(title){
return <h1>{title}</h1>
}
function Register(e){
  e.preventDefault();
  var name=e.target.name1.value;
  var surname=e.target.surname1.value;
  alert(name+' '+surname)

}
 
function App() {
  return (
    <div className='App'>
      <h1>{Message("Ola ke ase pa bienvenido, lea")}</h1>
      <form onSubmit={Register}>
        <p>Name here: <input type='text' name='name1'></input></p>
        <p>Surname here: <input type='text' name='surname1'></input></p>
        <input type='submit' value='Load'></input>
      </form>
    </div>
  );
}

export default App;
