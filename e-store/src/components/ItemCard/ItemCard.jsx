import React from "react";
import styles from "./ItemCard.module.scss";
import { NavLink } from "react-router-dom";

function ItemCard(props) {
    const { item } = props;                                                

    return (
        <div className={styles.DivContainer}>
            <h2>
                {item.title}
                <br />
            </h2>
            <p>
                {item.description}
                <br />
                <br />${item.cost}
                <br />Number Available: {item.quantity}
            </p>
            <img
                className={styles.Item_Image}
                src={item.image}
                alt={item.name}
            />
            <br />

            {/* Delete after */}
            {/* <p>TestCard</p> */}
            <NavLink to={`/items/${item.id}`}>See More</NavLink>
        </div>
    );
}

export default ItemCard;
