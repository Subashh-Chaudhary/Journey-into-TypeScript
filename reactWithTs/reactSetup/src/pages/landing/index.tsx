import { ReactElement } from "react";
import "./landing.css";
import { Heading1, Heading2} from "../../components/common/title";
import "../../Assets/css/main.css";

const LandingPage = (): ReactElement => {
  return (
    <>
      <Heading1 
      value="Developer">
        <>Subash Tharu</>
      </Heading1>

      <Heading2
      value="Developer">
        <>Binod Shrestha</>
      </Heading2>

      <div
        className="landing text-red-800 shadow-md"
        style={{
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
