import Articles from './Articles'


function Home({ user }) {
    if (user) {
      // return <h1>Welcome, { user.username }!</h1>;
      return <Articles />;
      
    } else {
      return <h2>Please log in to continue...</h2>;
    }
  }
  
  export default Home;
  