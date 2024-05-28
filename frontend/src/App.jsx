import './App.css';
import {Routes, Route}  from 'react-router-dom';
import Home from './pages/Home';
import CoursesIndex from "./pages/CoursesIndex";
import Course from "./pages/Course";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/CoursesIndex" element={<CoursesIndex />}/>
        <Route path="/Course" element={<Course />}/>
      </Routes>
    </MainLayout>
  );
};

export default App;
