import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBmi(bmi);
      if (bmi < 18.5) {
        setBmiStatus("Under Weight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setBmiStatus("Over Weight");
      } else if (bmi >= 30) {
        setBmiStatus("Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setError("Please enter valid numeric vallues for height and weight");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setError("");
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (in cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              id="height"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (in kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              id="weight"
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>

          {bmi && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
