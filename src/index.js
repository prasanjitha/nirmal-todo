import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { TodoContextProvider } from './store/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
);
