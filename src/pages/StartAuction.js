import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postArtWork } from "../store/artworks/thunks";
import { useParams } from "react-router-dom";
import { selectUser, selectToken } from "../store/user/selectors";
const StartAuction = () => {
  const [title, setTitle] = useState("");
  const [minimumBid, setMinimumBid] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const user = useSelector(selectUser);
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
  const onPostArtWork = () => {
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
    <form onSubmit={onPostArtWork}>
      <h1>Start an auction</h1>
      <div>
        title{" "}
        <input
          type="text"
          placeholder="name of your artwork"
          value={title}
          onChange={onTitleChange}
        ></input>
      </div>
      <div>
        minimum bid{" "}
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
        <button type="submit">Star auction</button>
      </div>
    </form>
  );
};
export default StartAuction;
