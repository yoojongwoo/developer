import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import TestRecoilSave from './pages/testRecoil/TestRecoilSave';
import TestReduxSave from './pages/testRedux/TestReduxSave';
import Home from './pages/Home';

function Layout() {
    return (
        <>
            <Link to={'/test-recoil-save'}>test-recoil-save</Link> <br />
            <Link to={'/test-redux-save'}>test-redux-save</Link>
            <hr />
            <Outlet />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/test-recoil-save" element={<TestRecoilSave />}></Route>
                    <Route path="/test-redux-save" element={<TestReduxSave />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
