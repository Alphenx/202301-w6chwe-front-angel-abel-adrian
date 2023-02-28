import { FC } from 'react';
import RobotModel from '../../app/models/robot.model';
import './Card.css';
interface RobotCard {
  robotCard: RobotModel;
}

const Card: FC<RobotCard> = ({ robotCard }) => {
  return (
    <li
      className={`card ${
        robotCard.faction === 'autobot' ? 'card--autobot' : 'card--decepticon'
      }`}
    >
      <div className="card__buttons">
        <input type="button" value="EDIT" className="card__btn btn__edit" />
        <input type="button" value="x" className="card__btn btn__cross" />
      </div>
      <img src={robotCard.imageUrl} alt={robotCard.name} />
      <div className="card__info">
        <h2>{robotCard.name}</h2>
        <p>Speed:{robotCard.velocity}</p>
        <p>Resistance: {robotCard.resistance}</p>
        <p>
          Faction:{' '}
          {robotCard.faction === 'autobot' ? (
            <img src="./assets/autobot.svg" alt="autobot" />
          ) : (
            <img src="./assets/decepticon.svg" alt="decepticon" />
          )}
        </p>
      </div>
    </li>

  );
};

export default Card;
