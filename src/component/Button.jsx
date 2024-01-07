const Button = ({ btn }) => {
  return (
    <>
      {btn.map((e) => (
        <button>{e}</button>
      ))}
    </>
  );
};
export default Button;
