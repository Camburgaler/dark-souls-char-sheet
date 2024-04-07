import React, { useState } from "react";
import "./Searchbox.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const accountData = require("../../data/accounts.json");
    const characterData = require("../../data/characters.json");
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
                if (entry.recordType === "account") {
                    return entry.username
                        .toLowerCase()
                        .includes(query.toLowerCase());
                }
                if (entry.recordType === "character") {
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

    // Event handler for visiting page
    const visitAccountPage = (id) => {
        // Visit page logic goes here
        console.log(`Visiting account page for entry with ID ${id}`);
    };

    // Event handler for visiting page
    const visitCharacterPage = (id) => {
        // Visit page logic goes here
        console.log(`Visiting character page for entry with ID ${id}`);
    };

    const renderResults = (entry, index) => {
        switch (entry.recordType) {
            case "account":
                return (
                    <>
                        <span>{entry.username}</span>
                        <button onClick={() => sendFriendRequest(index)}>
                            Send Friend Request
                        </button>
                        <button onClick={() => visitAccountPage(index)}>
                            Visit Page
                        </button>
                    </>
                );
            case "character":
                return (
                    <>
                        <span>{entry.name}</span>
                        <button onClick={() => visitCharacterPage(index)}>
                            Visit Page
                        </button>
                    </>
                );
            default:
                return;
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div className="results-container">
                {searchResults.map((entry, index) => (
                    <div key={index} className="entry">
                        {renderResults(entry, index)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
