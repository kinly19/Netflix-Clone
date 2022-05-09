import {Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import './App.scss';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
  )
}

export default App;