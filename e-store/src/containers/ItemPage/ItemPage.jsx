import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteItemById, getItemById } from "../../services/items";

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
        getItemById(id).then(
            //(value) =>
            (value) => console.log(value.quantity - 1),
        );
        //     value.quantity > 0
        //         ? alert(
        //               "Added 1 x " +
        //                   value.title +
        //                   " to cart" +
        //                   value.quantity -
        //                   1 +
        //                   " left",
        //           )
        //         : alert("Out of stock"),
        // );
    };

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <h1>{item.title}</h1>
                    <p>
                        Cost - ${item.cost}
                        <span> Quantity: {item.quantity}</span>
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <img src={item.image} alt={item.name} />
                    <p>{item.description}</p>
                    <button onClick={onButtonClickAddToCart}>
                        Add To Cart
                    </button>
                    <button onClick={onButtonClickDelete}>Delete</button>
                </div>
            )}
        </>
    );
}

export default ItemPage;
