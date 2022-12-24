import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card/Card";
import Paging from "./Paging/Paging";
import "./Home.css";

import { getCharacters } from "../Redux/Actions";

function Home() {
  const dispatch = useDispatch();

  const allCharacters = useSelector((state) => state.characters);

  const [charactersPerPage, setCharactersPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  // 2      *         8
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  //     16      -     8
  const currentCharacters = allCharacters.slice(
    indexOfFirstCharacter, // 8
    indexOfLastCharacter // 16
  );

  const page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className="cards">
      {allCharacters.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <Paging
            allCharacters={allCharacters.length}
            charactersPerPage={charactersPerPage}
            page={page}
            currentPage={currentPage}
          />
          {currentCharacters.map((char) => (
            <Card
              id={char.id}
              firstName={char.firstName}
              lastName={char.lastName}
              fullName={char.fullName}
              title={char.title}
              imageUrl={char.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
