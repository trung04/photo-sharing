import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import models from "../../modelData/models";

const UserDetail = () => {
  const { userId } = useParams();
  const user = models.userModel(userId);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {`${user.first_name} ${user.last_name}`}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: "Location :" + user.location,
          }}
        />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: "Description :" + user.description,
          }}
        />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: "Occupation :" + user.occupation,
          }}
        />

        <br />
        <Button
          variant="contained"
          component={Link}
          to={`/photos/${user._id}`}
          color="primary"
        >
          Xem ảnh của người dùng
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserDetail;
