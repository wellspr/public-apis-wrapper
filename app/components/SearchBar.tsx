import { Form } from "@remix-run/react";
import TextInput from "./TextInput";

const SearchBar = () => {
    return (
        <Form method="post" action="/search" className="search-bar">
            <TextInput placeHolder="Search APIs" label="Search APIs" />

            <div className="options">
                <span>Search in: </span>
                <div className="field-input">
                    <input
                        id="field-title"
                        type="checkbox"
                        name="title"
                        value="title"
                        defaultChecked
                    />
                    <label htmlFor="field-title">Title</label>
                </div>

                <div className="field-input">
                    <input
                        id="field-description"
                        type="checkbox"
                        name="description"
                        value="description"
                    />
                    <label htmlFor="field-description">Description</label>
                </div>
            </div>

            <button
                name="submit"
                aria-label="submit"
                type="submit"
                className="button button-search">
                Search
            </button>
        </Form>
    );

};

export default SearchBar;