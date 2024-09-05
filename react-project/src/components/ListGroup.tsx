import { useState } from "react";


// { items: [], heading: string }
interface List {
  items: string[];
  heading: string;
};




function ListGroup( { cities, heading}: Props)
{

    // render items dynamically
    let cities = ['Lagos', 'Abuja', 'Rivers', 'Jos', 'Calabar'];
   
    // hook: functions that allow us tap into built in featuress
    const [selectedIndex, setSelectedIndex] = useState(-1);
   

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
};

export default ListGroup;