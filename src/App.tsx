import React from 'react';
import './App.css';
const { useState } = React;


function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  type Item = {
    id: number;
    word: string;
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 新しい Todo を作成
    const newItem: Item = {
      id: items.length,
      word: inputValue
    };

    setItems([...items, newItem]);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>ひらかなで入力して下さい</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="inutText">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          autoFocus
          className="inputText"></input>
        <button type="submit" className="submitButton" >Submit</button>
      </form>
      <ul className="container">
        {items.map((item) => (
          <li key={item.id}>
            {item.id}:{item.word}
          </li>
        ))}
      </ul>
    </div>
  );
}
const heredoc = `秋の日の
ヴィオロンの
かりほの庵の`;

export default App;
