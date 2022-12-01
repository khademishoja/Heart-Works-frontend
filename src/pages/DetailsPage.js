import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectDetailsArtWorks } from "../store/artworks/selector";
import {
  fetchDetailsArtWorks,
  updateHeart,
  postBid,
} from "../store/artworks/thunks";
import { useParams } from "react-router-dom";
import { selectUser, selectToken } from "../store/user/selectors";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const [hearts, setHearts] = useState(0);
  const id = useParams();
  const artWork = useSelector(selectDetailsArtWorks);
  const [amount, setAmount] = useState(0);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [bids, setBid] = useState([]);

  const onAmonuntChange = (e) => {
    setAmount(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchDetailsArtWorks(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (artWork) setHearts(artWork.hearts);
    if (artWork) setBid(artWork.bids);
  }, [artWork]);
  const onheartClick = () => {
    if (artWork) {
      dispatch(updateHeart({ id: artWork.id, hearts: hearts + 1 }));
      setHearts(hearts + 1);
    }

    //dispatch(updateHeart(artWork));
  };

  const onBidPost = () => {
    if (amount) {
      if (bids.length === 0 && artWork.minimumBid >= amount) {
        alert(`you have to bid more than ${artWork.minimumBid}`);
      } else {
        const amounts = bids.map((bid) => {
          return bid.amount;
        });
        const maxAmount = Math.max(...amounts);
        console.log("max bid", maxAmount);
        if (amount <= maxAmount) {
          alert(`you have to bid more than ${maxAmount}`);
        } else {
          dispatch(
            postBid({
              email: user.email,
              amount: amount,
              artworkId: artWork.id,
            })
          );
          setBid([
            ...bids,
            { email: user.email, amount: amount, artworkId: artWork.id },
          ]);
        }
      }
    }
  };

  return artWork && bids ? (
    <div>
      <div>
        <h2>{artWork.title}</h2>
        <img src={artWork.imageUrl} alt="art work pic" />
        <p>Hearts:{hearts}</p>
        Bids:
        <ul>
          {bids.map((item, index) => {
            return (
              <li key={index}>
                Email:{item.email} <br />
                Amount:{item.amount}
              </li>
            );
          })}
        </ul>
        <button onClick={onheartClick}>Give heart</button>
        {token ? (
          <div>
            Amount :
            <input type="number" value={amount} onChange={onAmonuntChange} />
            <button onClick={onBidPost}>Bid</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  ) : (
    "Loading..."
  );
};
export default DetailsPage;
