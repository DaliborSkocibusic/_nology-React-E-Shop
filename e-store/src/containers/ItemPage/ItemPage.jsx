import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteItemById, getItemById } from '../../services/items';

function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then(setItem)
      .finally(() => setLoading(false));
  }, []);

  const onButtonClick = (event) => {
    deleteItemById(id).then(() => navigate('/'));
  };

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>{item.title}</h1>
          <h2>Cost - ${item.cost}</h2>
          <img src={item.image} alt={item.name} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum
            quasi eaque ipsum, quam doloremque aspernatur ipsa dolorem magnam
            iure sit possimus accusantium atque recusandae? Non adipisci vero
            molestiae doloribus!
          </p>
          <button onClick={onButtonClick}>Delete</button>
        </div>
      )}
    </>
  );
}

export default ItemPage;
