export const Button = ({ layout, className = "" }) => {
  return <button className={`button-default ${className}`}>{layout}</button>;
};
