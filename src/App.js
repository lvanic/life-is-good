import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { QuestionsHandler } from './Components/QuestionsHandler';
import { MainPage } from './Components/MainPage';

function App() {
  return (
    <div>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <div className='triangle' />
              <MainPage />
              <div className='circle' />
            </>
          } />
          <Route path='/questions' element={<QuestionsHandler />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
