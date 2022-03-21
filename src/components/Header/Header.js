import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const user_data = useSelector((state) => state.userdata.user);
  return (
    <div className="header">
      <span className="span" onClick={() => window.scroll(0, 0)}>
        Entertainment Hub{" "}
      </span>
      <div>
        <h1 className="header_text">
          hello
          <span className="header_text2">
            {user_data.length ? JSON.parse(user_data)[0].username : "Guest"}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
