import { Box, Grid, Grow, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
function Posts({ setCurrentPost }) {
  const posts = useSelector((store) => store.posts);

  return (
    <div>
      <Box my={3}>
        <Typography variant="h3">Posts</Typography>
      </Box>
      <Grid container spacing={2} alignItems="center">
        {posts.map((post) => (
          <Grow key={post._id} in>
            <Grid item>
              <Post post={post} setCurrentPost={setCurrentPost} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
