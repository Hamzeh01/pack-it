const Item = ({ item, onDeleteItem, onToggleItem }) => (
  <li>
    <input
      type="checkbox"
      checked={item.packed}
      onChange={() => onToggleItem(item.id)}
    />
    <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>
);

export default Item;
