import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import TestRecoilSave from './pages/testRecoil/TestRecoilSave';
import TestReduxSave from './pages/testRedux/TestReduxSave';
import Home from './pages/Home';
import TestBigFile from './pages/testBigFile/TestBigFile';

const links = [
    { url: '/test-recoil-save', ele: <TestRecoilSave /> },
    { url: '/test-redux-save', ele: <TestReduxSave /> },
    { url: '/test-big-file', ele: <TestBigFile /> },
];

function Layout() {
    return (
        <>
            {links.map((obj) => (
                <p key={obj.url} style={{ border: '1px solid #927b7b', padding: 3, display: 'inline-block', margin: 4 }}>
                    <Link to={obj.url}>{obj.url}</Link>
                </p>
            ))}
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
                    {links.map((obj) => (
                        <Route key={obj.url} path={obj.url} element={obj.ele}></Route>
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
