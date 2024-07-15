const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts.</h1>
      <button type="button" onClick={onGetPostsClick} className="btn btn-primary">Fetch dummy posts from server</button>
    </center>
  );
};
export default WelcomeMessage;
