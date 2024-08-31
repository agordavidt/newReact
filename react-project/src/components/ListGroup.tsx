// import { Fragment } from "react";


function ListGroup()
{

    // render items dynamically
    let cities = ['Lagos', 'Abuja', 'Rivers', 'Jos', 'Calabar'];
    cities = [];

    // const message = cities.length === 0?  <p>No item found</p>: null ;

    // if (cities.length === 0)
    // {
    //   return (
    //   <div>
    //     <h1>Cities in Nigeria</h1>
    //     <p className="lead">No item found in the list!</p>
    //   </div>
    //   );
    // }   
    return (
        // <Fragment>
      <>
        <h1>Cities in Nigeria</h1>
        {/* {cities.length === 0?  <p>No item found</p>: null } */}
        {/* { message } */}
        { cities.length === 0 && <p>No item found</p> }
        <ul className="mt-5 text-danger list-group">
          {  cities.map((item) => <li className="list-group-item" key={item}>{ item}</li>) }
        </ul>
      </>
      // </Fragment>
    );
};

export default ListGroup;