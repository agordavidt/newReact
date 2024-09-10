import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/Homecard";
import ListGroup from "./components/ListGroup";


const title = "Welcome to TomHunt";
const subtitle = "Search thousands of jobs in Nigeria";


function App()
{
 return (
  <>
    <Navbar />
    <Hero title={ title } subtitle={ subtitle} />
    <div className="contianer my-0">
      <div className="row">
        <div className="col-2 bg-danger">
          <ListGroup />

        </div>
        <div className="col-10 bg-warning">
          <HomeCard />

        </div>
      </div>
    </div>
  
  </>
 );
}

export default App;