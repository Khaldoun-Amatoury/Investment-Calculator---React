export default function UserInput({ onChange, userInput }) {
  //IMP
  //We lifted this userInput state up from the UserInput component to the app component as results components needs some functionality from userinput components so they are both linked in app so the state and the function handler should be in app component

  /*
  // here we could've made a state for each input but it is not a good practice so we made one state which binds all inputs together into one state with one handle function
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestmnet: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
*/
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          {/* here we made the onChange take a arrow function because when you put onChange it creates with it a event object which only takes on parameter so it does not take the input identifier so that's why we didn't put it as onChange = {handleChange} so first we made a arrow  funcion and then put for handleChange a parameter which is a hard coded one initialinvestment and then the other parameter which is made by the help of event object which is event.target.value */}
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
