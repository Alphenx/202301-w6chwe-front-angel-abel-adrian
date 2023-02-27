import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Card from '../Card/Card';
import { getRobot, selectRobot } from './CardList.Slice';

const RobotCardList = () => {
  const robotList = useAppSelector(selectRobot);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRobot());
  }, [dispatch]);
  return (
    <ul>
      {robotList.map((robot, i) => (
        <Card key={robot.name + i} robotCard={robot} />
      ))}
      <input
        type="button"
        value="robooots"
        onClick={() => dispatch(getRobot())}
      />
    </ul>
  );
};

export default RobotCardList;
