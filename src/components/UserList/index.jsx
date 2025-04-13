import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import models from "../../modelData/models";

const UserList = () => {
  const users = models.userListModel();

  return (
    <List>
      {users.map((user) => (
        <>
          <ListItem
            button
            key={user._id}
            component={Link}
            to={`/users/${user._id}`}
          >
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default UserList;
