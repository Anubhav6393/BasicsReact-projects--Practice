import { useState } from "react";

// const App = () => {
  function App() {
    const [clicked, setClicked] = useState(false);
  
    const ButtonClick = () => {
      setClicked(true);
    };
    const VarClick = () => {
      setClicked(false);
    };
    const NameClick = () => {
      setClicked(false);
    };
  
    return (


    <div>
      <p>{clicked ? 'Button clicked!' : 'Anubhav Mishra'}</p>
      <div>
        <button type="submit" onClick={ButtonClick}>Submit</button>
        <button type="submit" onClick={VarClick}>True</button>
        <button type="submit" onClick={NameClick}>False</button>
      </div>
    </div>
  );
}

export default App;
