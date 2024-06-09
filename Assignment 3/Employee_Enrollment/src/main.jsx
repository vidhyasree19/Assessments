// index.jsx

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap your App component with Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
