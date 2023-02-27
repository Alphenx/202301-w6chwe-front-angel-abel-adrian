import React, { useState } from 'react';

import './Form.css';
import { sendRobot } from './robotsFormSlice';
import { useAppDispatch } from '../../app/hooks';
import { getRobot } from '../CardList/CardList.Slice';

const Form = () => {
  const [speedValue, setSpeedValue] = useState('5');
  const [resistValue, setResistValue] = useState('5');
  const [, setFactionValue] = useState('autobot');
  const dispatch = useAppDispatch();
  function getCurrentDate() {
    let newDate = new Date();
    return newDate;
  }

  return (
    <form
      method="post"
      action="/create"
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const newRobot = {
          name: e.currentTarget.labelName.value,
          imageUrl: e.currentTarget.labelImgUrl.value,
          velocity: Number(e.currentTarget.labelSpeed.value),
          resistance: Number(e.currentTarget.labelResistance.value),
          creationDate: getCurrentDate(),
          faction: e.currentTarget.labelFaction.value,
        };
        dispatch(sendRobot(newRobot));
        dispatch(getRobot());
      }}
    >
      <h2>Create your Transformer</h2>

      <label className="form__name">
        Name:
        <input type="text" name="labelName" required />
      </label>

      <label className="form__img-url">
        Image Url:
        <input
          type="url"
          name="labelImgUrl"
          placeholder="https://your-img-url.com"
          pattern="https://.*"
          required
        />
      </label>

      <label className="form__speed">
        Speed:
        <span>
          <input
            name="labelSpeed"
            type="range"
            value={speedValue}
            min="0"
            max="10"
            step="1"
            onChange={(e) => setSpeedValue(e.target.value)}
          />
          <p>{speedValue}</p>
        </span>
      </label>

      <label className="form__resistance">
        Resistance:
        <span>
          <input
            name="labelResistance"
            type="range"
            value={resistValue}
            min="0"
            max="10"
            step="1"
            onChange={(e) => setResistValue(e.target.value)}
          />
          <p>{resistValue}</p>
        </span>
      </label>

      <div className="form__faction">
        <label className="form__faction-autobot" htmlFor="autobot">
          <input
            type="radio"
            id="autobot"
            name="labelFaction"
            value="autobot"
            checked
            onChange={(e) => setFactionValue(e.target.value)}
          />
          <img src="./assets/autobot.svg" alt="autobot" width={50} />
        </label>

        <label className="form__faction-decepticon" htmlFor="decepticon">
          <input
            type="radio"
            id="decepticon"
            name="labelFaction"
            value="decepticon"
            onChange={(e) => setFactionValue(e.target.value)}
          />
          <img src="./assets/decepticon.svg" alt="decepticon" width={50} />
        </label>
      </div>
      <input type="submit" value="CREATE" />
    </form>
  );
};

export default Form;
