import React from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Input,
  InputAdornment,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventIcon from "@mui/icons-material/Event";
import EditIcon from "@mui/icons-material/Edit";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const Feed = () => {
  return (
    <Box
      flex={4}
      sx={{ backgroundColor: "white", paddingTop: "0px", marginBottom: "50px" }}
    >
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Box
            className="FeedBox"
            sx={{
              height: "80px",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <img
              className="Feedimg"
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFS5wgwv3GdiQ/profile-displayphoto-shrink_100_100/0/1631624470785?e=1663200000&v=beta&t=jkBD_CNdFzem-6adVAEMfJCzVm6oKw_hAdSENdQUDsA"
              alt=""
              sx={{ borderRadius: "50%" }}
            />
            <input
              type="text"
              className="InputFeed"
              placeholder="Start a post"
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "20px",
              width: "100%",
            }}
          >
            <SlowMotionVideoIcon />
            Photo
            <InsertPhotoIcon />
            Video
            <EventIcon />
            Event
            <EditIcon />
            Write article
          </Box>
        </CardActions>
      </Card>
      <hr />

      <Card sx={{ minWidth: 200 }}>

        <CardContent>
          <Box
            className="FeedBox"
            sx={{
              height: "80px",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
            }}
          >

            <img
              className="Feedimg"
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFS5wgwv3GdiQ/profile-displayphoto-shrink_100_100/0/1631624470785?e=1663200000&v=beta&t=jkBD_CNdFzem-6adVAEMfJCzVm6oKw_hAdSENdQUDsA"
              alt=""
              sx={{ borderRadius: "50%" }}
            />
            <img
              className="FeedPostimg"
              src="https://media-exp1.licdn.com/dms/image/C4D22AQG2eDm5dRZoYA/feedshare-shrink_800/0/1657563752693?e=1660780800&v=beta&t=l07ss5z8fyL1BL1m56c-JyQ2sZqm9aqLUpjbLr0UqRo"
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "130px",
            }}
          >
            <Button variant="text" startIcon={<ThumbUpOffAltIcon />}>
              Delete
            </Button>
            <Button variant="text" startIcon={<CommentIcon />}>
              Commentss
            </Button>
            <Button variant="text" startIcon={<ShareIcon />}>
              Share
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
