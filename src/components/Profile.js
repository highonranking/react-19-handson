import React, {use, Suspense} from 'react';

const fetchData = async () => {
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();
    console.log(json);
    return json;
}   

const UserProfile = () => {
    const user = use(fetchData());
    return (
        <>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <div className="flex justify-center">
                <img className="h-16 w-16 rounded-full object-cover" src={user.results[0].picture.large} alt="Profile" />
            </div>
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{user ? `${user.results[0].name.first} ${user.results[0].name.last}` : "Loading..."}</h2>
                <p className="text-gray-600">{user ? user.results[0].gender : "Loading..."}</p>
            </div>
            <div className="mt-4">
                <p className="text-gray-600"><span className="font-semibold">Email:</span> {user ? user.results[0].email : "Loading..."}</p>
                <p className="text-gray-600"><span className="font-semibold">Phone:</span> {user ? user.results[0].cell : "Loading..."}</p>
                <p className="text-gray-600"><span className="font-semibold">Location:</span> {user ? user.results[0].location.city + ', '+  user.results[0].location.state + ', '+  user.results[0].location.country : "Loading..."}</p>

            </div>
        </div>
    </>
    )
}

const Profile = () => {

  return (
    <Suspense fallback = {<h2 className='text-2xl text-center font-bold mt-5'>Loading....</h2>}>
        <meta name='description' content='Fetch user names' />
      <meta name='keywords' content='highonranking' />
      <UserProfile/>
    </Suspense>
  )
}

export default Profile;

