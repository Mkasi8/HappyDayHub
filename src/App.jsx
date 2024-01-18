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
      <main>
        <div className="container">
          <h3>{people.length} Birthdays</h3>
          <section>
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
          </section>
          <button type="button" onClick={handleClick} className="btn btn-block">
            Clear All
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
