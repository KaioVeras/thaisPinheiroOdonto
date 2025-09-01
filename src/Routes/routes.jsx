import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;