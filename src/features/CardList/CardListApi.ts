export const getRobots = async () => {
  const response = await fetch(
    'https://huck8-202301-w6chwe-abel-adri-angel.onrender.com/api/v1/robots/'
  );
  const allRobots = await response.json();
  return allRobots;
};
