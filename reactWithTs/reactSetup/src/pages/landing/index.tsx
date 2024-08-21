import { ReactElement } from "react";
import "./landing.css"

const LandingPage = (): ReactElement => {
  return (
    <>
      <div
      className="landing"
        style={{
          color: "green",
          backgroundColor: "#cccccc",
          fontWeight: "bolder",
        }}
      >
        Home page section design
      </div>
    </>
  );
};

export default LandingPage;
