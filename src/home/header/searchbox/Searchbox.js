import React, { useState } from "react";
import "./Searchbox.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const userData = require("../../../data/users.json");
    const characterData = require("../../../data/characters.json");
    userData.forEach((user) => {
        user.recordType = "user";
    });
    characterData.forEach((character) => {
        character.recordType = "character";
    });
    const jsonData = [
        ...userData.map((entry) => ({ ...entry, recordType: "user" })),
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
                if (entry.recordType === "user") {
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
    const visitUserPage = (id) => {
        // Visit page logic goes here
        console.log(`Visiting user page for entry with ID ${id}`);
    };

    // Event handler for visiting page
    const visitCharacterPage = (id) => {
        // Visit page logic goes here
        console.log(`Visiting character page for entry with ID ${id}`);
    };

    const renderResults = (entry, index) => {
        switch (entry.recordType) {
            case "user":
                return (
                    <>
                        <span>{entry.username}</span>
                        <button onClick={() => sendFriendRequest(index)}>
                            Send Friend Request
                        </button>
                        <button onClick={() => visitUserPage(index)}>
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
