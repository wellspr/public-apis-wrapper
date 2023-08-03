import { Form } from "@remix-run/react";
import TextInput from "./TextInput";
import Check from "~/icons/check/Check";
import Box from "~/icons/box/Box";
import { useState } from "react";

const SearchBar = () => {

    const [titleChecked, setTitleChecked] = useState(true);
    const [descriptionChecked, setDescriptionChecked] = useState(false);

    return (
        <Form method="post" action="/search" className="search-bar">
            <TextInput placeHolder="Search APIs" label="Search APIs" />

            <div className="options">
                <span>Search in: </span>

                <div className="field-input">
                    <label htmlFor="field-title">
                        { titleChecked ? <Check /> : <Box /> }
                        <input
                            id="field-title"
                            type="checkbox"
                            name="title"
                            value="title"
                            checked={titleChecked}
                            onChange={e => setTitleChecked(e.target.checked)}
                            hidden
                        />
                        <span>Title</span>
                    </label>
                </div>
                
                <div className="field-input">
                    <label htmlFor="field-description">
                        { descriptionChecked ? <Check /> : <Box /> }
                        <input
                            id="field-description"
                            type="checkbox"
                            name="description"
                            value="description"
                            checked={descriptionChecked}
                            onChange={e => setDescriptionChecked(e.target.checked)}
                            hidden
                        />
                        <span>Description</span>
                    </label>
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