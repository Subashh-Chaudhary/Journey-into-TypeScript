import { ReactElement } from "react";
import "./landing.css";
import { Heading1} from "../../components/common/title";

const LandingPage = (): ReactElement => {
  return (
    <>
      <Heading1 value="Developer">
        <>Subash Tharu</>
      </Heading1>
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
