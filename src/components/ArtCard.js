import { NavLink } from "react-router-dom";
import { selectUser } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteArtWork } from "../store/artworks/thunks";

const ArtCard = ({ id, title, imageUrl, hearts, minimumBid, userId }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteArtWork(id));
  };
  return (
    <div className="container-artCard">
      <h2>{title}</h2>
      <img src={imageUrl} alt="art work pic" />
      <p>Hearts:{hearts}</p>
      <p>Minimum Bid:{minimumBid}</p>
      <button>
        <NavLink to={`artworks/${id}`}>View details </NavLink>
      </button>
      {user && user.isArtist && user.id === userId ? (
        <button onClick={onDelete}>Delete</button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ArtCard;
