// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoursesIndex from './pages/CoursesIndex';
import Course from './pages/Course';
import MainLayout from './components/layouts/MainLayout';
import StateExample from './pages/StateExample';
import Form from './pages/Form';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CoursesIndex" element={<CoursesIndex />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/stateexample" element={<StateExample />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
