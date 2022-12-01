import {
  startLoading,
  setAllArtWorks,
  setArtWorkeDetails,
  setSuccessMessage,
} from "./slice";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//GET request for all spaces
export const fetchArtWorks = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`http://localhost:4000/`);
    dispatch(setAllArtWorks(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
export const fetchDetailsArtWorks =
  (ArtWorkId) => async (dispatch, getState) => {
    try {
      //dispatch(startLoading());
      const response = await axios.get(
        `http://localhost:4000/artworks/${ArtWorkId.id}`
      );
      console.log(response.data);
      dispatch(setArtWorkeDetails(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
export const updateHeart = (artWork) => async (dispatch, getstate) => {
  try {
    const response = await axios.put(
      `http://localhost:4000/artworks/${artWork.id}`,
      { hearts: artWork.hearts }
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const postBid = (bid) => async (dispatch, getState) => {
  try {
    const { token } = getState().user;
    const res = await axios.post("http://localhost:4000/bids", bid, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
export const postArtWork = (artwork) => async (dispatch, getstate) => {
  try {
    const { token } = getstate().user;
    const res = await axios.post("http://localhost:4000/artworks", artwork, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status === 200) {
      dispatch(setSuccessMessage("Art posted successfully."));
    }
  } catch (e) {
    console.log(e);
  }
};
export const deleteArtWork = (id) => async (dispatch, getstate) => {
  try {
    const { token } = getstate().user;
    const res = await axios.delete(`http://localhost:4000/artworks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res);
    dispatch(fetchArtWorks());
  } catch (e) {
    console.log(e);
  }
};
