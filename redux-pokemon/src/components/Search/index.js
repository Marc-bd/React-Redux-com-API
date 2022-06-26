import { useState } from "react";
import { StyledContainer } from "./style";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    console.log(input);
    dispatch(addDigimonsThunk(input.toLowerCase(), setError));
    setInput("");
  };

  return (
    <StyledContainer>
      <div className="containerHeader">
        <h2>Procure pelo seu Digimon</h2>
      </div>
      <div className="containerSearch">
        <div className="containerInput">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Procure seu Digimon"
          />
          <button onClick={handleSearch} disabled={!input}>
            Pesquisar
          </button>
        </div>
        {error && <span>Digimon não encontrado</span>}
      </div>
    </StyledContainer>
  );
};

export default Search;
