import './App.css';
import Profile from './components/Profile';
import Posts from './components/Post';
import Message from './components/Message';
function App() {
  return (
    <>
    <div className=''> 
    <div className="App flex justify-center my-auto ">
      <Profile/>
      <Posts/>
    </div>
    <Message/>
    </div> 
    </>
  );
}

export default App;
