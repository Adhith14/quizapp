import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CreateTag from './components/CreateTag';
import LoginPage from './components/LoginPage';
import LeftSideNavbar from './components/LeftSideNavbar';
import { Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList';
import Moderator from './components/Moderator';
// import QuizList from './components/QuizList';
 

function App() {
  const handleAddQuiz = (newQuiz) => {
    // Add the newQuiz to the quizzes state or perform any other necessary actions
    console.log("New Quiz:", newQuiz);
  };

  const handleDeleteQuiz = (index) => {
    // Delete the quiz at the specified index from the quizzes state or perform any other necessary actions
    console.log("Delete Quiz at index:", index);
  };

  return (
    <div className="App">
      <Navbar/>
      <br></br><br></br><br></br>
      
      <Routes>
      <Route path='/' element={<CreateTag/>}/>
      <Route path='/quiz' element={<QuizList/>}/>
    
      <Route path='/mod' element={<Moderator/>}/> onAddQuiz={handleAddQuiz} onDeleteQuiz={handleDeleteQuiz}
      
     
     </Routes>
     {/* <LoginPage/> */}
     {/* <LeftSideNavbar/>       */}
     {/* <QuizList/> */}

    </div>
  );
}

export default App;
