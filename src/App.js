import './App.css';
import Header from './components/Header/Header';
import { Routes, Route,Navigate } from 'react-router-dom';
import Body from './components/Body'
import Question from './components/AskQuestion/Question';
import ViewQuestion from './components/ViewQuestion'
 
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/ask-question' element={<Question/>} />
        <Route path='/question' element = {<ViewQuestion/>}/>
      </Routes>

    </div>
  );
}

export default App;
  