import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Input, Typography } from "@mui/material";
import { data } from "autoprefixer";

function Searchbox(props) {
    const [query, setQuery] = useState("");
    const userData = require("../../../data/users.json").map((user) => {
        return <UserCard user={user} />;
    });
    const characterData = require("../../../data/characters.json").map(
        (character) => {
            return <Typography>{character.name}</Typography>;
        }
    );

    return (
        <div>
            <Input
                placeholder="Search for a user or character..."
                onChange={(event) => setQuery(event.target.value)}
                fullWidth
            />
            {require("../../../data/users.json")
                .filter((user) => {
                    if (query === "") {
                        return;
                    } else if (
                        user.name.toLowerCase().includes(query.toLowerCase())
                    ) {
                        return user;
                    }
                })
                .map((user) => {
                    return <UserCard user={user} />;
                })}
        </div>
    );
}

export default Searchbox;
