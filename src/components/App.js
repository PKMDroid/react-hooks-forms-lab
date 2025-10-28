import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";

function App({ items: initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  const itemsToDisplay = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ShoppingList items={itemsToDisplay} />
    </div>
  );
}

export default App;
