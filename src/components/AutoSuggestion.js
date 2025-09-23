import { useState } from "react";

const AutoSuggestion = () => {
  const suggestionlist = [
    "Msdhoni",
    "Ponting",
    "Hayden",
    "Gayle",
    "Bravo",
    "Pollard",
    "Darren",
    "Alice",
  ];
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const userInput = e.target.value;
    if (userInput.trim() === "") {
      setInputValue("");
      setFilteredSuggestions([]);
      return;
    }
    const filtered = suggestionlist.filter((suggestion) => {
      return suggestion.toLowerCase().includes(userInput.toLowerCase());
    });
    setInputValue(userInput);
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };
  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <div>Suggestion box</div>
      {showSuggestions && inputValue ? (
        filteredSuggestions.length > 0 ? (
          <ul>
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li key={index} onClick={() => handleSuggestion(suggestion)}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            <li>No suggestions found</li>
          </ul>
        )
      ) : null}
    </div>
  );
};

export default AutoSuggestion;
//  in the above code why is showSuggestions state variable needed if it is not there also there wont be any issue right?
