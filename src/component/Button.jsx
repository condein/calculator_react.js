const Button = ({ btn, handleOnClick }) => {
  return (
    <>
      {btn.map((e) => (
        <button onClick={() => handleOnClick(e)}>{e}</button>
      ))}
    </>
  );
};
export default Button;
