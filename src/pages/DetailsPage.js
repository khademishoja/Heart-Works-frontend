import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectDetailsArtWorks } from "../store/artworks/selector";
import { fetchDetailsArtWorks } from "../store/artworks/thunks";
import { useParams } from "react-router-dom";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const artWork = useSelector(selectDetailsArtWorks);
  useEffect(() => {
    dispatch(fetchDetailsArtWorks(id));
  }, [dispatch, id]);
  return artWork && artWork.bids ? (
    <div>
      <div>
        <h2>{artWork.title}</h2>
        <img src={artWork.imageUrl} alt="art work pic" />
        <p>Hearts:{artWork.hearts}</p>
        Bids:
        <ul>
          {artWork.bids.map((item, index) => {
            return (
              <p key={index}>
                Email:{item.email} <br />
                Amount:{item.amount}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};
export default DetailsPage;
