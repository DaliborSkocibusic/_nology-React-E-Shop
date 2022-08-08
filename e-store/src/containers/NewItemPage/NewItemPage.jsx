import { useState } from "react";
import { addItem } from "../../services/items";

import { useNavigate } from "react-router-dom";

function NewItemPage() {
    // TODO - set up image upload

    const navigate = useNavigate();

    const initialState = {
        name: "",
        category: "",
        description: "",
        image: "",
        name: "",
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
                    <label htmlFor="year">Year</label>
                    <input
                        id="year"
                        type="number"
                        value={formState.category}
                        name="category"
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
                    <input id="submit" type="submit" value="Create Item" />
                </div>
            </form>
        </main>
    );
}

export default NewItemPage;
