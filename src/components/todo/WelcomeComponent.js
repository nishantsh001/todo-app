import { Link, useParams  } from "react-router";
export default function WelcomeComponent() {
  // const params =  useParams();
  // console.log(params.username);
  const { username } = useParams();
  console.log(username);
  return (
    <div className='Welcome'>
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to='/todos'>go here</Link>
      </div>
    </div>
  );
}