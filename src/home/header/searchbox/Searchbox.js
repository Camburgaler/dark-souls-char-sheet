import React, { useState } from "react";
import "./Searchbox.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Simulated JSON data (replace with your actual data)
    const jsonData = require("../../../data/users.json");

    // Function to filter search results based on input
    const filterResults = (query) => {
        const filteredResults = jsonData.filter((entry) => {
            if (query === "") {
                return;
            } else {
                return entry.username
                    .toLowerCase()
                    .includes(query.toLowerCase());
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
    const visitPage = (id) => {
        // Visit page logic goes here
        console.log(`Visiting page for entry with ID ${id}`);
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
                        <span>{entry.username}</span>
                        <button onClick={() => sendFriendRequest(index)}>
                            Send Request
                        </button>
                        <button onClick={() => visitPage(index)}>
                            Visit Page
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
