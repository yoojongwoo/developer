import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestRecoilSave from './pages/testRecoil/TestRecoilSave';
import TestReduxSave from './pages/testRedux/TestReduxSave';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/test-recoil-save" element={<TestRecoilSave />}></Route>
                <Route path="/test-redux-save" element={<TestReduxSave />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
