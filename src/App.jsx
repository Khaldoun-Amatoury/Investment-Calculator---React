import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
//problem: there is a bug which is when we enter negative duration or 0 duration value the app crashes
//solution: we want to make sure that the results component is output conditionally, it should only output if we have valid user input

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //we added a plus before new value because there is a bug in the website where when we are adding numbers in the input together they are strings not numbers even though we put type= numbers they are still strings when calculated so they are being concatenated together like "1200" + "1300" = "12001300" so we need to transform them into numbers that's why we did that, the plus sign forces the conversion of the string value into a number int value
      };
    });
  }

  return (
    <>
      <Header />;
      <UserInput userInput={userInput} onChange={handleChange} />;
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
