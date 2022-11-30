import { startLoading, setAllArtWorks } from "./slice";
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
