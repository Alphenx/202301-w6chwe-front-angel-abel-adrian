import { RobotModel } from '../models/robot.model';

export const getRobots = async () => {
  const response = await fetch(
    'https://huck8-202301-w6chwe-abel-adri-angel.onrender.com/api/v1/robots/',
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Acess-Control-Allow-Origin': '*',
      },
    }
  );
  const allRobots = await response.json();
  return allRobots;
};

const sendRobots = async (robot: RobotModel) => {
  const response = await fetch(
    'https://huck8-202301-w6chwe-abel-adri-angel.onrender.com/api/v1/robots/',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(robot),
    }
  );
  const currentRobot = await response.json();
  return currentRobot;
};

export default sendRobots;
