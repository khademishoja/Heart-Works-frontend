import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArtWorks } from "../store/artworks/thunks";
import { selectArtWorks } from "../store/artworks/selector";
import ArtCard from "../components/ArtCard";
export const Homepage = () => {
  const artWorks = useSelector(selectArtWorks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtWorks());
  }, [dispatch]);
  if (!artWorks) return <div>Loading...</div>;
  console.log(artWorks);
  return (
    <Container>
      {artWorks.map((artWork, index) => {
        return (
          <div key={index}>
            <ArtCard
              id={artWork.id}
              title={artWork.title}
              imageUrl={artWork.imageUrl}
              hearts={artWork.hearts}
              minimumBid={artWork.minimumBid}
            />
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
