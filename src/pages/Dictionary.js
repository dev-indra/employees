import { useState, useEffect } from "react";
function Dictionary() {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/${word}")
        .then((response) => response.json())
        .then((data) => {
          setMeaning(data[0].meanings[0].definitions[0].definition);
        });
    })
  
    const handleChange = (e) => {
      setWord(e.target.value);
    };
  
    const handleSubmit = (e) => {
      search(e);
    };
  
    const handleClear = () => {
      setWord("");
      setMeaning("");
    };
  
    const handleCopy = () => {
      navigator.clipboard.writeText(meaning);
    };
  
    const handlePaste = () => {
      navigator.clipboard.readText().then((text) => {
        setWord(text);
      });
    };
    return (
        <>  
        <div className="container">
            <h2>Dictionary</h2>
            <input type="text" value={word} onChange={handleChange} />
            <button className="app-buttons" onClick={handleSubmit}>Search</button>
            <button className="app-buttons" onClick={handleClear}>Clear</button>
            <button className="app-buttons" onClick={handleCopy}>Copy</button>
            <button className="app-buttons" onClick={handlePaste}>Paste</button>
            <p>{meaning}</p>
        </div>
        </>
    );
  }
  
  export default Dictionary;