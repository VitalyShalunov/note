import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Notes'
import Notes from './components/Notes';
import WithoutIndex, { withoutIndex } from './utils'

class App extends React.Component
{
  constructor(props){
    super(props); //вызвать конструктор наследуемого класса
  this.state={ 
    notes:["**Покупки** : чай,кофе, молоко",
    "**Дела**: закончить перевод, сделать презентацию",
    "Ненужна заметка, удалить",
    "**Нужная заметка, не удалять**!"  ]//массив
  };
  }

  onNoteDelete= (indexToRemove)=>
  {
    this.setState(oldState =>{
      return{
        notes: withoutIndex(oldState.notes,indexToRemove)
      };
    })
  }

onNoteCreate = (newNoteText)=>
{
  this.setState(oldState =>{
    return{
      notes: [newNoteText].concat(oldState.notes)
    };
  })
}

  render()
  {
    return(
      <div className="back">
      <Notes mynotes={this.state.notes} onDelete={this.onNoteDelete} onCreate={this.onNoteCreate}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
