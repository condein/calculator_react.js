import Name from "./component/Name";
import Button from "./component/Button";
import Display from "./component/Display";
const App = () => {
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
      <center>
        <div className="outer">
          <Display />
          <div className="btn">
            <Button btn={btn} />
          </div>
          <Name />
        </div>
      </center>
    </>
  );
};
export default App;
