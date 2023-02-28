import { FC } from 'react';
import RobotModel from '../../app/models/robot.model';

interface RobotCard {
  robotCard: RobotModel;
}

const Card: FC<RobotCard> = ({ robotCard }) => {
  return (
    <div>
      <button>boton-1</button>
      <button>boton-2</button>
      <img src={robotCard.imageUrl} width={100} alt={robotCard.name} />
      <p role="paragraph">Name:{robotCard.name}</p>
      <p>Speed:{robotCard.velocity}</p>
      <p>Resistance: {robotCard.resistance}</p>
      <p>Faction: {robotCard.faction}</p>
    </div>
  );
};

export default Card;
