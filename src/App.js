import "./App.css";
import React from "react";
import Slider from "@mui/material/Slider";
import Switch from "react-ios-switch";

function App() {
  const [toggled, setToggled] = React.useState(false);
  const [value, setValue] = React.useState(3);
  const mediaWatcher = window.matchMedia("(min-width: 376px)");
  const [isDesktopScreen, setIsDesktopScreen] = React.useState(
    mediaWatcher.matches
  );

  const discountPrice =
    calculateValue(value).price - calculateValue(value).price * 0.25;
  const handleChange = (e, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
    }
  };

  React.useEffect(() => {
    function updateIsNarrowScreen(e) {
      setIsDesktopScreen(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  });

  function calculateValue(value) {
    switch (value) {
      case 1:
        return {
          price: `8.00`,
          pageViews: `${10}K`,
        };
      case 2:
        return {
          price: `12.00`,
          pageViews: `${50}K`,
        };
      case 3:
        return {
          price: `16.00`,
          pageViews: `${100}K`,
        };
      case 4:
        return {
          price: `24.00`,
          pageViews: `${500}K`,
        };
      case 5:
        return {
          price: `36.00`,
          pageViews: `${1}M`,
        };
      default:
        return {
          price: `16.00`,
          pageViews: `${100}K`,
        };
    }
  }
  const marks = [1, 2, 3, 4, 5].map((value) => ({
    value,
    label: null,
  }));

  const renderSlider = () => (
    <div className="slidecontainer">
      <Slider
        className="slider"
        defaultValue={8}
        aria-label="Default"
        step={null}
        min={1}
        max={5}
        value={value}
        onChange={handleChange}
        scale={calculateValue}
        marks={marks}
      />
    </div>
  );

  return (
    <div className="container">
      <div className="wrapper">
        <svg
          className="bg-pattern"
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="449"
        >
          <path
            fill="#F1F5FE"
            fillRule="evenodd"
            d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
          />
        </svg>
        <div className="text">
          <h2>Simple, traffic-based pricing</h2>
          <p className="sign-up-text">
            <span className="day-trial">Sign-up for our 30-day trial.</span>{" "}
            <span>No credit card required.</span>
          </p>
        </div>
        <div className="calculator-container">
          <div className="views-month">
            <p className="page-views-label">
              {calculateValue(value).pageViews} PAGEVIEWS
            </p>
            {!isDesktopScreen && renderSlider()}
            <div className="text-montly-fee">
              {toggled ? (
                <p className="monthly-fee">{`$${discountPrice}.00`}</p>
              ) : (
                <p className="monthly-fee">{`$${
                  calculateValue(value).price
                }`}</p>
              )}
              <p>/month</p>
            </div>
          </div>
          {isDesktopScreen && renderSlider()}
          <div className="monthly-billing">
            <p>Monthly Billing</p>
            <Switch
              className="switch"
              checked={toggled}
              onChange={(checked) => setToggled(checked)}
              onColor="#0FD5C2"
            />
            <p>Yearly Billing</p>
            <p className="discount">
              {isDesktopScreen ? "25% discount" : "-25%"}
            </p>
          </div>
          <hr className="divider" />
          <div className="list-button-container">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <div>
              <a href="##">
                <span className="trial-button">Start my trial</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
