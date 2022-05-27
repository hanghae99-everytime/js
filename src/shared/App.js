import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import MyPage from '../pages/MyPage';
import Signup from '../pages/Signup';
import Write from '../pages/Write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myPage/:id" element={<MyPage />} />
        <Route path="/write/:id" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
