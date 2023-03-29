import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

let user_data = {
  media_data: [{"title": "Harry Potter and the Goblet of Fire", "id": 0}, 
                  {"title": "Game of Thrones", "id": 1}],
  user_id: 0,
  user_selection: 0, 
  selection_buffer: []
};

function arrowInput(e) {
  fetch('/myserver.endpoint', {
    method: 'POST',
    body: JSON.stringify({
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        // Handle data
     })
     .catch((err) => {
        console.log(err.message);
     });
}

root.render(
  <React.StrictMode>  <App user_data={user_data}/> </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
