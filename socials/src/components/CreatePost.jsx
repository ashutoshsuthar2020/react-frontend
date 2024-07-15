import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="form-group">
        <label htmlFor="title">User Id</label>
        <input
          type="text"
          className="form-control"
          name="userId"
          id="Title"
          placeholder="Enter your user id"
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="Title"
          placeholder="Enter Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Post Description</label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>

      <div className="form-group">
        <label htmlFor="reactions">Reactions</label>
        <textarea
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many reactions at begining"
        />
      </div>

      <div className="form-group">
        <label htmlFor="body">Post tags</label>
        <textarea
          type="text"
          className="form-control"
          name="tags"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function creatPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      redirect("/");
    });
}
export default CreatePost;
