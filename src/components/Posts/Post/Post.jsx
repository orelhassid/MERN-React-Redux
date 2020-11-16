import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { deletePost, likePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },

  header: {
    position: "absolute",
    left: 0,
    top: 0,
    padding: "10px",
  },
  cardActions: {
    justifyContent: "space-between",
  },
});

export default function Post({ post, setCurrentPost }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          alt="Contemplative Reptile"
          height="140"
          image={post.file}
        />
        <Box className={classes.header}>
          <Typography variant="body2" color="textSecondary">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </Box>
        <CardContent>
          <Typography variant="h6" component="p">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id, post))}
        >
          {`Likes ${post.likeCount}`}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setCurrentPost(post._id)}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
