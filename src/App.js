import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoaderPage from './pages/Loader';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/loader" element={<LoaderPage />} />
        </Routes>
    );
}

export default App;
