import { NavLink } from "react-router-dom";
const ArtCard = ({ id, title, imageUrl, hearts, minimumBid }) => {
  return (
    <div className="container-artCard">
      <h2>{title}</h2>
      <img src={imageUrl} alt="art work pic" />
      <p>Hearts:{hearts}</p>
      <p>Minimum Bid:{minimumBid}</p>

      <button>
        <NavLink to={`artworks/${id}`}>View details </NavLink>
      </button>
    </div>
  );
};

export default ArtCard;
