import { useState } from "react";
import { addItem } from "../../services/items";

import { useNavigate } from "react-router-dom";

function NewItemPage() {
    // TODO - set up image upload

    const navigate = useNavigate();

    const initialState = {
        title: "",
        category: "",
        description: "",
        image: "",
        cost: 0,
        quantity: 0,
    };

    const [formState, setFormState] = useState(initialState);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        // do a check for imageUrl here
        const item = { ...formState };

        //TODO stop form submit if we have empty fields
        // - show error message on empty fields ?
        // - check validity of image URL

        if (!item.image) {
            item.image = "https://www.placecage.com/200/200";
        }

        addItem(item).then(() => navigate("/"));
    };

    return (
        <main>
            <h1>Add New Item</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={formState.title}
                        onChange={onInputChange}
                        name="title"></input>
                </div>

                <div>
                    <label htmlFor="category">Category</label>
                    <input
                        id="cateogry"
                        type="text"
                        value={formState.category}
                        name="category"
                        onChange={onInputChange}></input>
                </div>

                <div>
                    <label htmlFor="cost">Unit Cost</label>
                    <input
                        id="cost"
                        type="number"
                        value={formState.cost}
                        name="cost"
                        onChange={onInputChange}></input>
                </div>

                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        id="quantity"
                        type="number"
                        value={formState.quantity}
                        name="quantity"
                        onChange={onInputChange}></input>
                </div>

                <div>
                    <label htmlFor="image">Image URL</label>
                    <input
                        id="image"
                        type="text"
                        value={formState.image}
                        name="image"
                        onChange={onInputChange}></input>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        id="description"
                        type="text"
                        value={formState.description}
                        name="description"
                        onChange={onInputChange}></input>
                </div>

                <div>
                    <input id="submit" type="submit" value="Create Item" />
                </div>
            </form>
        </main>
    );
}

export default NewItemPage;
