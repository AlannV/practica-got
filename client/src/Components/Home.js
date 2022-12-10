import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import "./Home.css";

import { getCharacters } from "../Redux/Actions";

function Home() {
  const dispatch = useDispatch();

  const allCharacters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  console.log(allCharacters);

  return (
    <div className="cards">
      {allCharacters.length === 0 ? (
        <div>Loading</div>
      ) : (
        allCharacters.map((char) => (
          <Card
            id={char.id}
            firstName={char.firstName}
            lastName={char.lastName}
            fullName={char.fullName}
            title={char.title}
            imageUrl={char.imageUrl}
          />
        ))
      )}
    </div>
  );
}

export default Home;
