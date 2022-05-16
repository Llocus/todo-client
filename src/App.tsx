import {Route, Routes} from 'react-router-dom';
import PageNotFoundView from './Pages/PageNotFoundView';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Register from './Pages/Register';


const App = ()  =>  {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/lista' element={<Users/>} />
        <Route path='/cadastrar' element={<Register/>} />
        <Route path='*' element={<PageNotFoundView />}/>
      </Routes>
    </>
  );
}

export default App;
