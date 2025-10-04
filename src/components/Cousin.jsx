import Special from "./FamilyTree/Special";
import { Asset2Context } from "./FamilyTree/FamilyTree";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h1>{name}</h1>
      {name === "Shadhu" && <Special asset={asset}></Special>}
    </div>
  );
};

export default Cousin;
