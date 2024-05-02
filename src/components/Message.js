import React, {use, useState, Suspense} from 'react';



const fetchMessage = () => {
    return new Promise((res, rej)=> {
         setTimeout(()=>{
            res("Life is fun");
         }, 1000)
    })
};

const MessageOutput = ({messagePromise}) => {
    // use to get resolve message
    const message = use(messagePromise);
 return(
    <p className='text-xl text-green-800 text-center  mt-5'>Here is your message: <span className='font-bold'>{message}</span></p>
 )
}
const MessageContaoner = ({messagePromise}) => {
    return(
<Suspense
      fallback={
        <h1 className='text-2xl text-center font-bold mt-5'>Downloading ...</h1>
      }
    >
        <MessageOutput messagePromise={messagePromise}/>
        </Suspense>
    )
}
const Message = () => {
    const [messagePromise, setMessagePromise] = useState(null);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setMessagePromise(fetchMessage());
        setShow(true);
    }

    if(show){
        return (
            <MessageContaoner messagePromise={messagePromise }/> 
        )
    }

  return (
    <button onClick={handleClick} className='text-center flex mx-auto bg-gray-600 hover:bg-gray-700 text-white rounded-md font-bold py-2 px-4'>A message for you</button>
  )
}

export default Message