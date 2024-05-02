import { use, Suspense, useContext } from 'react';


const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  return res.json();
};

const PostItems = () => {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post, index) => ( index < 3 &&
        <div key={post.id} className='bg-blue-50 shadow-md p-6 my-6 rounded-lg'>
          <h2 className='text-2xl font-bold mb-2'>{post.title}</h2>
          <p className='text-gray-700'>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => {
  return (
    <Suspense
      fallback={
        <h1 className='text-2xl text-center font-bold mt-5'>Loading...</h1>
      }
    >
      <PostItems />
    </Suspense>
  );
};

export default Posts;