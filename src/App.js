import { useState } from 'react';
import './App.css';
import Notes from './state-notes/notes';
import NotesList from './state-notes/notes-lists';
import { applyMiddleware, createStore } from 'redux';
import { NotesReducer } from './redux/reducer';
import {Provider} from 'react-redux';
// import store from './redux/store';
// import thunk from 'redux-thunk';

const store = createStore(NotesReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  const [notes=[], setNotes=[]] = useState([]);

  return (
    <Provider store={store}>
    <div className="App">
      <Notes setNotes={setNotes}/>
      <NotesList notes={notes} setNotes={setNotes}/>
    </div>
    </Provider>

  );
}

export default App;
