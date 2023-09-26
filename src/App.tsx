import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestRecoilSave from './pages/testRecoilSave/TestRecoilSave';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test-recoil-save" element={<TestRecoilSave />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
