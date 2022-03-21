import { useDispatch, useSelector } from "react-redux";
import { set_user } from "../../redux/actions/MovieAction";
import { useHistory } from "react-router-dom";

const Profile = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("LogedInUser");
    dispatch(set_user([]));
    history.push("login");
  };
  const user_data = useSelector((state) => state.userdata.user);
  return (
    <div className="">
      <span className="">Entertainment Hub </span>
      <div>
        <h1 className="">
          hello
          <span className="">
            {user_data.length ? JSON.parse(user_data)[0].username : "Guest"}
          </span>
          <button onClick={handleLogout}>Logout</button>
        </h1>
      </div>
    </div>
  );
};

export default Profile;
