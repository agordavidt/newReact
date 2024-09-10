const List = [
  "Ogoing Recruitment at UPDC Plc",
  "Customer Care / Sales Officer Job at Canada International Work and Study Resource Center",
  "Receptionist / Front Desk Personnel Job at Syx-Brij Nigeria Limited",
  "Administration Assistant Job at Save the Children",
  "Receptionist Job at Emmix Global Limited",
  "Customer Service Officer (Store Sales) Job at Tempkers Limited",
];



function ListGroup()
{
    return (
      <ul className="list-group">
        {List.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
}


export default ListGroup;