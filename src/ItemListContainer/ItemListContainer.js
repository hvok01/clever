import './ItemListContainer.css';

function ItemListContainer({greetings}) {
  return (
    <div className="ItemListContainer">
        <p>{greetings}</p>
    </div>
  );
}

export default ItemListContainer;
