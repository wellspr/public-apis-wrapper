import { Form } from "@remix-run/react";
import TextInput from "./TextInput";

const SearchBar = () => {
    return (
        <Form method="post" action="/search" className="search-bar">
            <TextInput placeHolder="Search in APIs" label="Search in APIs" />

            <div className="options">
                <span>Search in: </span>
                <div className="field-input">
                    <input type="radio" name="field" id="field-title" value="title" defaultChecked />
                    <label htmlFor="field-title">Title</label>
                </div>

                <div className="field-input">
                    <input type="radio" name="field" id="field-decription" value="description" />
                    <label htmlFor="field-description">Description</label>
                </div>
            </div>

            <button type="submit" className="button button-search">Search</button>
        </Form>
    );

};

export default SearchBar;