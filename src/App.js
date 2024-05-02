import './App.css';
import Profile from './components/Profile';
import Posts from './components/Post';
import Message from './components/Message';
import ThemeOld from './components/Theme.old';
import Theme from './components/Theme';


function App() {
  return (
    <>
    <div className=''> 
    <div className="App flex justify-center my-auto ">
      <Profile/>
      <Posts/>
    </div>
    <Message/>

    <ThemeOld/>
    <Theme/>
    </div> 
    </>
  );
}

export default App;
