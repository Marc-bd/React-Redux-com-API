import { StyledContainerList } from "./style";
import { useSelector } from "react-redux";

const DigimonList = () => {
  const { digimons } = useSelector((digimon) => digimon);

  return (
    <StyledContainerList>
      <ul>
        {digimons.map((digimon, index) => (
          <li key={index}>
            <h2> {digimon.name} </h2>
            <img src={digimon.img} alt={`imagem digimon ${digimon.name}`} />
            <h3>{digimon.level}</h3>
          </li>
        ))}
      </ul>
    </StyledContainerList>
  );
};

export default DigimonList;
