import { Form } from "@remix-run/react";
import TextInput from "./TextInput";
import Check from "~/icons/check/Check";
import Box from "~/icons/box/Box";
import { useState } from "react";
import CheckboxInput from "./CheckboxInput";

const SearchBar = () => {

    const [titleChecked, setTitleChecked] = useState(true);
    const [descriptionChecked, setDescriptionChecked] = useState(false);

    return (
        <Form method="post" action="/search" className="search-bar">
            <TextInput placeHolder="Search APIs" label="Search APIs" />

            <div className="options">
                <span>Search in: </span>
                <CheckboxInput name="title" initialState={true} label="Title" />
                <CheckboxInput name="description" initialState={false} label="Description" />
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