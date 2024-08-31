// import { Fragment } from "react";


function ListGroup()
{

    // render items dynamically
    const cities = ['Lagos', 'Abuja', 'Rivers', 'Jos', 'Calabar'];

   
    return (
        // <Fragment>
      <>
        <h1>Research Organizations in Nigeria</h1>
        <ul className="mt-5 text-danger list-group">
          {  cities.map((item) => <li className="list-group-item">{ item}</li>) }
        </ul>
      </>
      // </Fragment>
    );
};

export default ListGroup;