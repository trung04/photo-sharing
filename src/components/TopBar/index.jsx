import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useMatch } from "react-router-dom";
import models from "../../modelData/models";

const TopBar = () => {
  const matchUsers = useMatch("/users/:userId");
  const matchPhotos = useMatch("/photos/:userId");

  const match = matchUsers || matchPhotos;
  const userId = match?.params?.userId;
  const user = userId ? models.userModel(userId) : null;
  const currentUserName = user
    ? `${user.first_name} ${user.last_name}`
    : "Null";

  const location = useLocation();
  let contextText = "";

  switch (true) {
    case location.pathname.startsWith("/photos/"):
      contextText = `Photos of ${currentUserName}`;
      break;
    case location.pathname.startsWith("/users/"):
      contextText = currentUserName;
      break;
    default:
      contextText = "";
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          B22DCCN873 - Nguyễn Thành Trung
        </Typography>
        <Typography variant="subtitle1">{contextText}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
