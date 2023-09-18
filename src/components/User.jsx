import "./User.css";
import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div className="user">
      <h2>{`Name: ${user.name}`}</h2>
      <h2>{`User name: ${user.username}`}</h2>
      <h2>{`E-mail: ${user.email}`}</h2>
      <h2>Address:</h2>
      <h3>{`City: ${user.address.city}`}</h3>
      <h3>{`Street: ${user.address.street}`}</h3>
      <h3>{`Apt.: ${user.address.suite}`}</h3>
    </div>
  );
};

User.propTypes = {};

export default User;
