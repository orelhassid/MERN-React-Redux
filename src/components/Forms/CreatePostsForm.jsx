import React, { useEffect, useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
/**
 * Fields: [Title, Message, Creator, Tags, File]
 */
function CreatePostsForm({ setCurrentPost, currentPost }) {
  const initData = {
    title: "",
    message: "",
    creator: "",
    tags: "",
    file: "",
  };
  const [data, setData] = useState(initData);
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);
  const post = posts.find((post) => post._id === currentPost);

  useEffect(() => {
    post && setData(post);
  }, [post]);

  const { title, message, creator, tags } = data;

  const handleSubmit = (event) => {
    event.preventDefault();

    formatData();

    if (currentPost) dispatch(updatePost(currentPost, data));
    else dispatch(createPost(data));

    setData(initData);
    setCurrentPost(null);
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const formatData = () => {
    let tags = data.tags.replace(/\s/g, "").split(",");
    tags = tags.filter((tag) => tag !== "");
    data.tags = tags;
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">
          {currentPost ? `Edit "${post.title}" Post` : "Create a New Post"}
        </Typography>
        <TextField
          label="Title"
          name="title"
          value={title}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Message"
          name="message"
          value={message}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Creator"
          name="creator"
          value={creator}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Tags"
          name="tags"
          value={tags}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            handleChange({ currentTarget: { name: "file", value: base64 } })
          }
        />
        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            {currentPost ? `Save` : "Create"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default CreatePostsForm;
