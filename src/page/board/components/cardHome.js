export const CardHome = ({ title, icon, number, text }) => {
  return (
    <div className="card-home news">
      <div className="card-home-title">
        <h4>{title}</h4>
        {icon}
      </div>
      <div className="card-home-text">
        <p>{number}</p>
        <span>{text}</span>
      </div>
    </div>
  );
};
