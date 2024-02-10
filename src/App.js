import React, { useReducer, useState } from "react";
import { collectionData } from "./collection";

const App = () => {
  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "All") {
      dispatch({ type: "ALL" });
    } else if (word === "Cars") {
      dispatch({ type: "CARS" });
    } else if (word === "Views") {
      dispatch({ type: "VIEWS" });
    }
  };
  const reducer = (state, action) => {
    if (action.type === "ALL") {
      return collectionData;
    }
    if (action.type === "CARS") {
      const filtered = collectionData.filter((item) => item.kind === "Cars");
      return [...filtered];
    }
    if (action.type === "VIEWS") {
      const filtered = collectionData.filter((item) => item.kind === "Views");
      return [...filtered];
    }
  };

  const [state, dispatch] = useReducer(reducer, collectionData);

  return (
    <>
      <section>
        <div>
          <h2>React Filter</h2>
          <div>
            <button value="All" onClick={handleBtns}>
              All
            </button>
            <button value="Cars" onClick={handleBtns}>
              Cars
            </button>
            <button value="Views" onClick={handleBtns}>
              Views
            </button>
          </div>

          <div>
            {state.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.linkImg} alt={item.name} />
                  <div>
                    <h1>{item.name}</h1>
                    <p>{item.kind}</p>
                    <p>{item.info} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
