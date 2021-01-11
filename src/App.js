import './App.css';
// import Picture from './Picture.js'
import requests from './requests.js'
// import Photos from './Photos.js';
// import ToDoList from './ToDoList.js';
import Users from './Users.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Photos /> */}
        {/* <ToDoList /> */}
        {/* <Picture fetchUrl={requests.photosUrl} /> */}
        <Users />
      </header>
    </div>
  ); }

export default App;
