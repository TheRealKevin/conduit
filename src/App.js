import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Article from './Pages/Article/Article';
import Feed from './Pages/Feed/Feed';
import Landing from './Pages/Landing/Landing';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import User from './Pages/User/User';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Landing/> */}
      {/* <Signin/> */}
      {/* <Signup/> */}
      {/* <User/> */}
      <Article/>
      {/* <Feed/> */}
      <Footer/>
    </div>
  );
}

export default App;
