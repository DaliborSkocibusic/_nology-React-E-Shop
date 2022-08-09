import { useState, useEffect } from "react";
import styles from "./ItemList.module.scss";
import { getItems } from "../../services/items";
import { sortItemsAlphabetically } from "./utils";
import ItemCard from "../../components/ItemCard/ItemCard";
function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const items = await getItems();
            setItems(items);
        };

        wrapper();
    }, []);

    return (
        <section className={styles.Container}>
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
                ))}
        </section>
    );
}

export default ItemList;