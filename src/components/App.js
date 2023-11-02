import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((item) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if(isConfirmed) setItems([]);
  }

  return (
    <div>
      
    </div>
  )
}
