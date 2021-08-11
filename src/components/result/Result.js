export const Result = ({ textToDisplay }) => {
  return (
    <div id="result" className="result">
      {textToDisplay || "0"}
    </div>
  );
};
