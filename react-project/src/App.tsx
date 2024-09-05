import ListGroup  from "./components/ListGroup";


function App()
{

  let cities = ["Lagos", "Abuja", "Rivers", "Jos", "Calabar"];
  return <div><ListGroup items={cities} heading="Cities in Nigeria" /></div>
}

export default ListGroup;