import Articles from './Articles'
import NewArticle from './NewArticle';


function Home({ user }) {
    if (user) {
      
      return (
        <>
          <h4>Welcome back, { user.firstname }!</h4>
          <Articles />
        </>
      )
      
    } else {
      return <h2>Please log in to continue...</h2>;
    }
  }
  
  export default Home;
  