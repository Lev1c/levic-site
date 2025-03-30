export const Button = ({ layout, className = "", onClick }) => {
  return (
    <button className={`button-default ${className}`} onClick={onClick}>
      {layout}
    </button>
  );
};
