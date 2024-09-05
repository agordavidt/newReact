// import { Fragment } from "react";
// import { MouseEvent } from 'react';

import { useState } from "react";

function ListGroup() {
  // render items dynamically
  let cities = ["Lagos", "Abuja", "Rivers", "Jos", "Calabar"];

  // hook: functions that allow us tap into built in featuress
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // cities = [];

  // Event Handler
  // const handleClick = function(event: MouseEvent){
  //   console.log(event);
  // }

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
      <div className="container">
        <h1>Cities in Nigeria</h1>
        {/* {cities.length === 0?  <p>No item found</p>: null } */}
        {/* { message } */}
        {cities.length === 0 && <p>No item found</p>}
        <ul className="mt-5 text-danger list-group">
          {cities.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
    // </Fragment>
  );
}

export default ListGroup;
