import { useState } from "react";
import data from "./data";
import { Card } from "./Card";

function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <>
      <div>
        <h1>{people.length} Birthdays</h1>
        {people.map(({ id, name, age, image }) => {
          return (
            <>
              <Card
                key={id}
                name={name}
                age={age}
                image={image}
                handleClick={handleClick}
              />
            </>
          );
        })}
        <button type="button" onClick={handleClick}>
          Clear All
        </button>
      </div>
    </>
  );
}

export default App;
