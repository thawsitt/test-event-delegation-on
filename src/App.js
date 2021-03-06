import React from "react";
import "./App.css";

const numButtons = 3000;

const FancyButton = ({ label, id, isSelected }) => {
  return (
    <div>
      <button
        key={id}
        id={id}
        className={`button${isSelected ? " selected" : ""}`}
      >
        {label}
      </button>
    </div>
  );
};

const App = () => {
  // A set containing ids of selected items
  const [selectedItems, setSelectedItems] = React.useState(new Set());

  // ids = ["0", "1", ...., "2999"]
  const ids = [...Array(numButtons).keys()].map((n) => n.toString());

  // Add id to selectedItems
  const handleClick = (event) => {
    // Get id from button element
    const id = event.target.id;
    setSelectedItems((prevState) => new Set([...prevState, id]));
  };

  return (
    <div className="app">
      <h1>Using Event Delegation</h1>
      {/* Notice that there is only one onClick added to parent container*/}
      <div className="container" onClick={handleClick}>
        {ids.map((id) => (
          <FancyButton
            key={id}
            id={id}
            label={id}
            isSelected={selectedItems.has(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
