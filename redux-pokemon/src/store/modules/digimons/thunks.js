import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  console.log(digimon);
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((res) => {
      console.log(res);
      dispatch(addDigimon(res.data));
    })
    .catch((error) => setError(true));
};

export default addDigimonsThunk;
