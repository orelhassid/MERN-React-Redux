import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import CreatePostsForm from "./components/Forms/CreatePostsForm";
import Posts from "./components/Posts/Posts";

function App() {
  const dispatch = useDispatch();
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentPost, dispatch]);

  return (
    <div>
      <CreatePostsForm
        setCurrentPost={setCurrentPost}
        currentPost={currentPost}
      />
      <Posts setCurrentPost={setCurrentPost} />
      <footer>This is Footer</footer>
    </div>
  );
}

export default App;
