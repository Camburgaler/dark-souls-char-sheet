import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BASE_PATH, CHARACTER_PATH, FRIEND_PATH } from "../../constants";
import { findAcceptedFriendUuid, findUsername } from "../../utilities";
import "./Searchbox.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const user = useSelector((state) => state.user);

    const accountData = require("../../data/accounts.json");
    const characterData = require("../../data/characters.json");
    const friendsData = require("../../data/account_friends.json");
    accountData.forEach((account) => {
        account.recordType = "account";
    });
    characterData.forEach((character) => {
        character.recordType = "character";
    });
    const jsonData = [
        ...accountData.map((entry) => ({ ...entry, recordType: "account" })),
        ...characterData.map((entry) => ({
            ...entry,
            recordType: "character",
        })),
    ];

    // Function to filter search results based on input
    const filterResults = (query) => {
        const filteredResults = jsonData.filter((entry) => {
            if (query === "") {
                return null;
            } else {
                if (
                    entry.recordType === "account" &&
                    entry.uuid !== user.uuid
                ) {
                    return entry.username
                        .toLowerCase()
                        .includes(query.toLowerCase());
                }
                if (
                    entry.recordType === "character" &&
                    (entry.account === user.uuid ||
                        entry.account ===
                            findAcceptedFriendUuid(user.uuid, entry.account))
                ) {
                    return entry.name
                        .toLowerCase()
                        .includes(query.toLowerCase());
                }
            }
            return null;
        });
        setSearchResults(filteredResults);
    };

    // Event handler for input changes
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        filterResults(event.target.value);
    };

    // Event handler for sending friend request
    const sendFriendRequest = (id) => {
        // Send friend request logic goes here
        console.log(`Sending friend request for entry with ID ${id}`);
    };

    const renderResults = (entry, index) => {
        switch (entry.recordType) {
            case "account":
                return (
                    <Box>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography>{entry.username}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                visibility={
                                    friendsData.find((request) => {
                                        return (
                                            (request.recipient === entry.uuid &&
                                                request.requestor ===
                                                    user.uuid) ||
                                            (request.requestor === entry.uuid &&
                                                request.recipient === user.uuid)
                                        );
                                    })
                                        ? "hidden"
                                        : "visible"
                                }
                            >
                                <Button
                                    fullWidth
                                    onClick={() => sendFriendRequest(index)}
                                >
                                    Send Friend Request
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    href={
                                        BASE_PATH +
                                        FRIEND_PATH +
                                        "/" +
                                        entry.uuid
                                    }
                                >
                                    Visit Homepage
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                );
            case "character":
                return (
                    <Box>
                        <Typography>
                            {entry.name}
                            <Typography color={"lightgray"}>
                                {findUsername(entry.account)}
                            </Typography>
                        </Typography>
                        <Button
                            href={BASE_PATH + CHARACTER_PATH + "/" + entry.uuid}
                        >
                            See Character
                        </Button>
                    </Box>
                );
            default:
                return;
        }
    };

    return (
        <Box className="search-container">
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Box className="results-container">
                {searchResults.map((entry, index) => (
                    <Box key={index} className="entry">
                        {renderResults(entry, index)}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default App;
