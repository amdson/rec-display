import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TDLogic from './components/TDLogic';
import { MediaDisplay, MediaPanel} from './components/MediaDisplay';
import React from 'react';


// const Header = () => {
//   return (
//     <header>
//       <h1>todos</h1>
//       <p>Items will persist in the browser local storage</p>
//     </header>
//   );
// };

const App = () => {
  let media_data = [{"title": "Harry Potter and the Goblet of Fire"}, 
                  {"title": "Game of Thrones"}]; 
  return (
    <div className="App">
      <Header className="App-header"/>
      <MediaDisplay data={media_data}/>
    </div>
  );
};
export default App;

// function App() {
//   return (
//     <React.Fragment>
//     <h1>Hello world!</h1>
//     <p>I am in a React Component!</p>
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
//     </React.Fragment>
//   );
// }

