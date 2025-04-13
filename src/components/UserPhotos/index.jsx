import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
  Divider,
} from "@mui/material";
import models from "../../modelData/models";

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div>
      {photos.map((photo) => (
        <Card
          key={photo._id}
          style={{ marginBottom: "16px", paddingTop: "2%" }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              className="img-resize"
              src={`/images/${photo.file_name}`}
              alt="User Upload"
              style={{ maxWidth: "100%", maxHeight: 400, borderRadius: 8 }}
            />
            <Box sx={{ marginTop: 1, color: "gray", fontSize: "0.8rem" }}>
              Ngày đăng: {new Date(photo.date_time).toLocaleString()}
            </Box>
          </Box>

          <CardContent>
            <Card style={{ borderRadius: "5px" }}>
              <CardContent>
                {photo.comments &&
                  photo.comments.map((comment) => (
                    <>
                      <div
                        key={comment._id}
                        style={{
                          marginTop: "5px",
                          backgroundColor: "#f0f2f5",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography variant="caption">
                          <Button
                            component={Link}
                            to={`/users/${comment.user._id}`}
                          >
                            <strong>{`${comment.user.first_name} ${comment.user.last_name}`}</strong>
                          </Button>

                          <Typography
                            dangerouslySetInnerHTML={{
                              __html: comment.comment,
                            }}
                          />
                          <small>
                            {new Date(comment.date_time).toLocaleString()}
                          </small>
                        </Typography>
                      </div>
                    </>
                  ))}
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserPhotos;
