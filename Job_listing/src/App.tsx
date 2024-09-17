import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/Homecard";
import ListGroup from "./components/ListGroup";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
import Footer from "./components/Footer";



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
        <div className="col-2 p-3">
          <ListGroup />

        </div>
        <div className="col-10">
          <HomeCard />

        </div>
      </div>
    </div>
    {/* <ListGroup />
    <HomeCard /> */}
    <JobListings />
    <ViewAllJobs />
    <Footer />

  
  </>
 );
}

export default App;