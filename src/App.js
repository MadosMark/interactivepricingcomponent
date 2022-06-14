import "./App.css";
import React from "react";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const [value, setValue] = React.useState(8);
  const discountPrice = value - value * 0.25;
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // - 10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month

  return (
    <div className="container">
      <div className="wrapper">
        <div className="text">
          <h2>Simple, traffic-based pricing</h2>
          <p className="sign-up-text">
            <span className="day-trial">Sign-up for our 30-day trial.</span>{" "}
            <span>No credit card required.</span>
          </p>
        </div>
        <div className="calculator-container">
          <div className="views-month">
            <p>K PAGEVIEWS</p>
            <div className="text-montly-fee">
              {toggled ? (
                <p className="monthly-fee">{discountPrice}$</p>
              ) : (
                <p className="monthly-fee">{value}$</p>
              )}

              <p>/month</p>
            </div>
          </div>
          <div className="slidecontainer">
            <Slider
              className="slider"
              defaultValue={8}
              aria-label="Default"
              step={4}
              min={8}
              max={36}
              value={value}
              onChange={handleChange}
            />
          </div>
          <div className="monthly-yearly">
            <p>Monthly Billing</p>
            <Switch
              className="switch"
              color="default"
              checked={toggled}
              onChange={(e) => setToggled(e.target.checked)}
            />
            <p>Yearly Billing</p>
            <p className="discount">25% discount</p>
          </div>
          <hr className="line" />
          <div className="list-button">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <div>
              <a href="##">
                <span className="button">Start my trial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
