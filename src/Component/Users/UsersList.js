import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={props.id}>
            {user.name} ({user.age} years)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
