function List() {
  const fruits = [
    { name: "apple", calories: 109 },
    { name: "mango", calories: 200 },
    { name: "banana", calories: 67 },
    { name: "pear", calories: 45 },
    { name: "syau", calories: 148 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));
  fruits.sort((a, b) => a.calories - b.calories); //numeric

 const HighCalFruits = fruits.filter((fruit)=> fruit.calories>=100);


const list = HighCalFruits.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name}: &nbsp; <b> {fruit.calories} </b>
    </li>
  ));

  return (
    <>
      <h1>Notes</h1>
      <hr />
      <ol>{list}</ol>
    </>
  );
}
export default List;
