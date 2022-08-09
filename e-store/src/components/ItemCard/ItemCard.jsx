import React from "react";
import styles from "./ItemCard.module.scss";
import { NavLink } from "react-router-dom";

function ItemCard({ item }) {
    // const { item } = props;

    return (
        <div className={styles.DivContainer}>
            <h2>
                {item.title}
                <br />
            </h2>
            <p>
                Description: {item.description}
                <br />
                <br />Cost ${item.cost}
                <br />
                Number Available: {item.quantity}
                <br />
                Favourite: {`${item.favourite}`}
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
