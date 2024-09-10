const List = [
  "Banking",
  "Agriculture",
  "Technology",
  "Manufacturing"  
];



function ListGroup()
{
    return (
      <ul className="list-group">
        {List.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    );
}


export default ListGroup;