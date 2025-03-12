const Menu = ({ children }) => {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-list_link">
          <button className="menu-list_link_button">Home</button>
        </li>
        <li className="menu-list_link">
          <button className="menu-list_link_button">About</button>
        </li>
        <li className="menu-list_link">
          <button className="menu-list_link_button">Portfolio</button>
        </li>
        <li className="menu-list_link">
          <button className="menu-list_link_button">Program</button>
        </li>
        <li className="menu-list_link">
          <button className="menu-list_link_button">Contacts</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
