import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import RobotModel from '../../app/models/robot.model';
import { RootState } from '../../app/store';
import { getRobots } from './CardListApi';

export interface RobotState {
  value: RobotModel[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RobotState = {
  value: [],
  status: 'idle',
};

// Función asíncrona que llamaremos en los componentes posteriormente.
export const getRobot = createAsyncThunk('transformers/getRobot', async () => {
  const response = await getRobots();

  return response;
});

export const cardListSlice = createSlice({
  name: 'transformers',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getRobot.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRobot.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(getRobot.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectRobot = (state: RootState) => state.transformers.value;
export const selectStatus = (state: RootState) => state.transformers.status;
export default cardListSlice.reducer;
