import Namee from "./component/Naame";
import Container from "./component/Container";
import Name from "./component/Name";
import Button from "./component/Button";
import Display from "./component/Display";
import { useState } from "react";

const App = () => {
  let [num, setnum] = useState("");
  const OnClick = (buttoText) => {
    if (buttoText === "c") {
      setnum("");
    } else if (buttoText === "=") {
      const addNum = eval(num);
      setnum(addNum);
    } else {
      const newDisplay = num + buttoText;
      setnum(newDisplay);
    }
  };

  let btn = [
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    "c",
  ];
  return (
    <>
      <Container>
        <center>
          <Namee />
          <div className="outer">
            <Display handleOnText={num} />
            <div className="btn">
              <Button btn={btn} handleOnClick={OnClick} />
            </div>
            <Name />
          </div>
        </center>
      </Container>
    </>
  );
};
export default App;
