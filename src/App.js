import { useState } from "react";
import { BtnContainer } from "./components/btn-container/BtnContainer";
import { Result } from "./components/result/Result";
import "./App.css";

const App = () => {
  // STATES -----------------------------------------------------------------------

  const [textToDisplay, setTextToDisplay] = useState("");

  // -----------------------------------------------------------------------------

  // FUNCTIONS---------------------------------------------------------------------

  const display = (input) => {
    setTextToDisplay((textToDisplay + input).toString());
  };

  const reset = () => {
    return setTextToDisplay("");
  };

  const clear = () => {
    if (textToDisplay.length >= 2) {
      setTextToDisplay(textToDisplay.slice(0, -1));
    } else {
      setTextToDisplay("");
    }
  };

  const calculation = () => {
    const ttl = eval(textToDisplay);
    setTextToDisplay(ttl.toString());
  };

  //------------------------------------------------------------------------------

  // EVENT WHEN BUTTON IS CLICKED -----------------------------------------------

  const handleOnClick = (val) => {
    if (val === "AC") {
      return reset();
    }

    if (textToDisplay === "0") {
      return setTextToDisplay(val);
    }

    if (val === "C") {
      return clear();
    }

    if (val === "=") {
      return calculation();
    }

    display(val);
  };

  // -----------------------------------------------------------------------------------

  return (
    <div>
      <h1>Prank Calculator 😜</h1>
      <div className="mainParent">
        {/* <!-- display area --> */}
        <Result textToDisplay={textToDisplay} />

        {/* <!-- buttons --> */}
        <BtnContainer handleOnClick={handleOnClick} />
      </div>
    </div>
  );
};

export default App;
