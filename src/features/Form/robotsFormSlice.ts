import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RobotModel } from '../../app/models/robot.model';
import { RootState } from '../../app/store';
import { sendRobots } from '../../app/api/robotsAPI';

export interface RobotState {
  value: RobotModel[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RobotState = {
  value: [],
  status: 'idle',
};

// Función asíncrona que llamaremos en los componentes posteriormente.
export const sendRobot = createAsyncThunk(
  'robots/sendRobot',
  async (robot: RobotModel) => {
    const response = await sendRobots(robot);
    return response;
  }
);

export const formSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendRobot.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendRobot.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(sendRobot.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectRobot = (state: RootState) => state.robots.value;
export const selectStatus = (state: RootState) => state.robots.status;

export default formSlice.reducer;
