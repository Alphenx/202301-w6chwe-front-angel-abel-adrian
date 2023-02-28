interface RobotModel {
  id?: string;
  name: string;
  imageUrl: string;
  velocity: number;
  resistance: number;
  creationDate: Date;
  faction: string;
}

export default RobotModel;
