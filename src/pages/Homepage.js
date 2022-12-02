import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArtWorks, deleteArtWork } from "../store/artworks/thunks";
import { selectArtWorks } from "../store/artworks/selector";
import ArtCard from "../components/ArtCard";
import "./style.css";
export const Homepage = () => {
  const artWorks = useSelector(selectArtWorks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtWorks());
  }, [dispatch]);
  if (!artWorks) return <div>Loading...</div>;
  console.log(artWorks);
  return (
    <div className="Container">
      {artWorks.map((artWork, index) => {
        return (
          <div key={index}>
            {artWork.bids ? (
              <ArtCard
                id={artWork.id}
                title={artWork.title}
                imageUrl={artWork.imageUrl}
                hearts={artWork.hearts}
                numberOfBids={artWork.bids.length}
                userId={artWork.userId}
              />
            ) : (
              <ArtCard
                id={artWork.id}
                title={artWork.title}
                imageUrl={artWork.imageUrl}
                hearts={artWork.hearts}
                numberOfBids={0}
                userId={artWork.userId}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
