import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectDetailsArtWorks } from "../store/artworks/selector";
import { fetchDetailsArtWorks, updateHeart } from "../store/artworks/thunks";
import { useParams } from "react-router-dom";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const [hearts, setHearts] = useState(0);
  const id = useParams();
  const artWork = useSelector(selectDetailsArtWorks);

  useEffect(() => {
    dispatch(fetchDetailsArtWorks(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (artWork) setHearts(artWork.hearts);
  }, [artWork]);
  const onheartClick = () => {
    if (artWork) {
      dispatch(updateHeart({ id: artWork.id, hearts: hearts + 1 }));
      setHearts(hearts + 1);
    }

    //dispatch(updateHeart(artWork));
  };
  return artWork && artWork.bids ? (
    <div>
      <div>
        <h2>{artWork.title}</h2>
        <img src={artWork.imageUrl} alt="art work pic" />
        <p>Hearts:{hearts}</p>
        Bids:
        <ul>
          {artWork.bids.map((item, index) => {
            return (
              <li key={index}>
                Email:{item.email} <br />
                Amount:{item.amount}
              </li>
            );
          })}
        </ul>
        <button onClick={onheartClick}>Give heart</button>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};
export default DetailsPage;
