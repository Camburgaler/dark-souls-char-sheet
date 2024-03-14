import { Grid, Typography } from "@mui/material";
import Turnstone from "turnstone";
import UserCard from "./UserCard";

function Searchbox(props) {
    const listbox = [
        {
            id: "users",
            name: "USERS",
            displayField: "name",
            data: require("../../../data/users.json"), // TODO: update when we have API connection
            searchType: "contains",
        },
        {
            id: "characters",
            name: "CHARACTERS",
            displayField: "name",
            data: require("../../../data/characters.json"), // TODO: update when we have API connection
            searchType: "contains",
        },
    ];

    return (
        <Turnstone
            id="search"
            name="search"
            typeahead
            clearButton
            maxItems={20}
            noItemsMessage="No matches :("
            placeholder="Search for users or characters..."
            listbox={listbox}
            listboxIsImmutable
            defaultListbox={listbox}
            defaultListboxIsImmutable
            debounceWait={250}
            matchText
            Item={(props) => {
                if (props.groupId === "users") {
                    return (
                        <UserCard
                            user={listbox[props.groupIndex].data[props.index]}
                        />
                    );
                } else if (props.groupId === "characters") {
                    return <Typography>character</Typography>;
                }
            }}
        />
    );
}

export default Searchbox;
