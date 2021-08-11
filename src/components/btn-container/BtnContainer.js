export const BtnContainer = ({ handleOnClick }) => {
  const btnItems = [
    "AC",
    "C",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    "OFF",
  ];

  return (
    <div className="items">
      {btnItems.map((val, i) => (
        <button key={i} className={val} onClick={() => handleOnClick(val)}>
          {val}
        </button>
      ))}
    </div>
  );
};
