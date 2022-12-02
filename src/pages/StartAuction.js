import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect, useState } from "react";
import { postArtWork } from "../store/artworks/thunks";
import { useParams } from "react-router-dom";
import { selectUser, selectToken } from "../store/user/selectors";
import { selectSuccessMessge } from "../store/artworks/selector";
const StartAuction = () => {
  const [title, setTitle] = useState("");
  const [minimumBid, setMinimumBid] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const user = useSelector(selectUser);
  const successMessage = useSelector(selectSuccessMessge);
  const dispatch = useDispatch();
  const onNumberChange = (e) => {
    setMinimumBid(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };
  const onPostArtWork = (e) => {
    e.preventDefault();
    dispatch(
      postArtWork({
        title: title,
        imageUrl: imageUrl,
        minimumBid: minimumBid,
        userId: user.id,
      })
    );
  };
  return (
    <div className="container">
      <form onSubmit={onPostArtWork}>
        <h1>Start an auction</h1>
        <div>
          title
          <input
            type="text"
            placeholder="name of your artwork"
            value={title}
            onChange={onTitleChange}
          ></input>
        </div>
        <div>
          minimum bid
          <input
            type="number"
            value={minimumBid}
            onChange={onNumberChange}
          ></input>
        </div>
        <div>
          imageurl
          <input
            type="text"
            placeholder="http://"
            value={imageUrl}
            onChange={onImageUrlChange}
          ></input>
        </div>
        <div>{/* <img src="" /> */}</div>
        <div>
          <button type="submit" className="btn">
            Star auction
          </button>
        </div>
        {successMessage ? <h3>{successMessage}</h3> : <div></div>}
      </form>
    </div>
  );
};
export default StartAuction;
