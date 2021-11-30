import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoutes } from '@utils/constants/routes.const';
import Home from '@views/home/Home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
    </Routes>
  </Router>

);

export default App;
