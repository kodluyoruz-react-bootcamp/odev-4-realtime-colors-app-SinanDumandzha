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

  const bgColorChangeHandler = (e) => {
    setNewBgColor(e.target.value);
    setBgColor(e.target.value);
  }

  return (
    <div style={{ backgroundColor: newBgColor }}>
      <ColorPicker bgColorChangeHandler={bgColorChangeHandler} color={newBgColor} />
      <ColorInfo color={newBgColor} />
    </div>
  );
};

export default App;
