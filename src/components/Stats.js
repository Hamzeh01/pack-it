export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemsNo = items.length;
  const packedNo = items.filter((item) => item.packed).length;
  const percent = Math.round((packedNo / itemsNo) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${itemsNo} items on your list, and you already packed ${packedNo} (${percent}%)`}
      </em>
    </footer>
  );
}
