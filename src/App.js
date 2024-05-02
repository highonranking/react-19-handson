import './App.css';
import Profile from './components/Profile';
import Posts from './components/Post';
import Message from './components/Message';
import ThemeOld from './components/Theme.old';
import Theme from './components/Theme';
import ActionForm from './components/ActionForm';
import ShoppingCart from './components/ShoppingCart';
import PostsUseFormStatus from './components/FormStatus';
import AddToCartForm from './components/AddToFormCart';
import OptimisticMessages from './components/OptimisticMessages';


function App() {
  return (
    <>
    <a className='px-12 mb-12 cursor-pointer underline-offset-1 text-blue-500' target='_blank' href='https://github.com/highonranking/react-19-handson/'>repo</a>
    <div className=''> 
    <div className="App flex justify-center my-auto ">
      <Profile/>
      <Posts/>
    </div>
    <Message/>

    <ThemeOld/>
    <Theme/>

    <ActionForm/>

    <ShoppingCart/>


    <PostsUseFormStatus/>

    <AddToCartForm/>

  <OptimisticMessages/>    
    </div> 



    </>
  );
}

export default App;
