import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Card from '../Card/Card';
import { getRobot, selectRobot } from './CardList.Slice';
import './CardList.css';
const RobotCardList = () => {
  const robotList = useAppSelector(selectRobot);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRobot());
  }, [dispatch]);
  return (
    <>
      <ul className="cards-container">
        {robotList.map((robot, i) => (
          <Card key={robot.id} robotCard={robot} />
        ))}{' '}
        <input
          className="robot-btn"
          type="button"
          value="Give me transformers"
          onClick={() => dispatch(getRobot())}
        />
      </ul>
    </>
  );
};

export default RobotCardList;
