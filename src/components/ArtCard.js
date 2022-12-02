import { NavLink } from "react-router-dom";
import { selectUser } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtWork } from "../store/artworks/thunks";
import "./style.css";

const ArtCard = ({ id, title, imageUrl, hearts, numberOfBids, userId }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteArtWork(id));
  };
  return (
    <div className="container">
      <h2>{title}</h2>
      <img src={imageUrl} alt="art work pic" className="artWorkPic" />
      <p>❤️ {hearts}</p>
      <p>🤑️ {numberOfBids}</p>
      <button className="btn">
        <NavLink to={`artworks/${id}`} className="detailsLink">
          View details{" "}
        </NavLink>
      </button>
      {user && user.isArtist && user.id === userId ? (
        <button onClick={onDelete} className="btndelete">
          Delete
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ArtCard;
