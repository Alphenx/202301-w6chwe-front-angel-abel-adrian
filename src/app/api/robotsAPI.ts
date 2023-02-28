import RobotModel from '../models/robot.model';

export const sendRobots = async (robot: RobotModel) => {
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
