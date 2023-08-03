import { Form } from "@remix-run/react";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import Button from "./Button";

const SearchBar = () => {
    return (
        <Form method="post" action="/search" className="search-bar">
            <TextInput placeHolder="Search APIs" label="Search APIs" />

            <div className="options">
                <span>Search in: </span>
                <CheckboxInput name="title" initialState={true} label="Title" />
                <CheckboxInput name="description" initialState={false} label="Description" />
            </div>

            <Button name="submit" aria-label="submit" type="submit" className="button-search">
                Search
            </Button>
        </Form>
    );
};

export default SearchBar;