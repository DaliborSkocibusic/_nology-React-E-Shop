import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteItemById, getItemById } from "../../services/items";

import styles from "./ItemPage.module.scss";

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

    const onButtonClickDelete = (event) => {
        deleteItemById(id).then(() => navigate("/"));
    };

    const onButtonClickAddToCart = (event) => {
        // console.log(item.quantity);
        console.log(item.quantity);
        item.quantity
            ? alert(`Added 1 x ${item.title} to cart ${item.quantity - 1} left`)
            : alert("Out of stock");
    };

    return (
        <div className={styles.OuterContainer}>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div className={styles.Container}>
                    <h1>{item.title}</h1>
                    <div className={styles.TopInnerContainer}>
                        <p>Cost ${item.cost}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Favourite: {`${item.favourite}`}</p>
                    </div>
                    <img src={item.image} alt={item.name} width={250}/>
                    <p className={styles.ParagraphContainer}>
                        {item.description}
                    </p>
                    <div className="ButtonContainer">
                        <button onClick={onButtonClickAddToCart}>
                            Add To Cart
                        </button>
                        <button onClick={onButtonClickDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ItemPage;
