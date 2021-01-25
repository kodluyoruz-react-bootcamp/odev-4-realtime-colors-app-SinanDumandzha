import React, { useEffect, useContext } from 'react';

import { initSocket, disconnectSocket, setBgColor, subscribeToBgColor } from './socketServices';

import BgColorContext from './contexts/BgColorContext';

import ColorPicker from './components/ColorPicker/ColorPicker';
import ColorInfo from './components/ColorInfo/ColorInfo';

import './App.css';

function App() {
  const { newBgColor, setNewBgColor } = useContext(BgColorContext);

  useEffect(() => {
    initSocket();

    subscribeToBgColor(bgColor => {
      setNewBgColor(bgColor);
    });

    return () => disconnectSocket();
  }, [setNewBgColor]);

  let newColor;

  const colorPickHandler = (e) => {
    newColor = (e.target.value);
  }

  const bgColorChangeHandler = (e) => {
    setNewBgColor(newColor);
    setBgColor(newColor);
  }

  return (
    <div className="app" style={{ backgroundColor: newBgColor }}>
      <ColorPicker colorPickHandler={colorPickHandler} bgColorChangeHandler={bgColorChangeHandler} color={newBgColor} />
      <ColorInfo color={newBgColor} />
    </div>
  );
};

export default App;
