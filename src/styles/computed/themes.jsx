import React, { createContext, useContext, useState } from 'react';

const ThemeMainContext = createContext();

export const ThemeContext = ({ children }) => {
  const [parentBackground, setParentBackground] = useState('#f5f6f8ff');
  const [scrollShadowCoverBG, setScrollShadowCoverBG] = useState('#ffffff');
  const [bottomShadowCoverBG, setBottomShadowCoverBG] = useState('#666666');
  const [textColor, setTextColor] = useState('#000000');
  const [objectColor, setObjectColor] = useState('#ffffff');
  const [optionColor, setOptionColor] = useState('#e3e2e6ff');
  const [objectBorderColor, setObjectBorderColor] = useState('#e6e9f0ff');
  const [flatListLineColoe, setFlatListLineColor] = useState('#00000017');

  const setDarkMode = () => {
    setTextColor('#ffffff');
    setObjectColor('#18171cff');
    setOptionColor('#e3e2e619');
    setObjectBorderColor('#202020');
    setParentBackground('#020202');
    setScrollShadowCoverBG('#020202');
    setFlatListLineColor('#ffffff20');
    setBottomShadowCoverBG('#020202');
  };

  const setLightMode = () => {
    setTextColor('#000000');
    setObjectColor('#ffffff');
    setOptionColor('#e3e2e6ff');
    setObjectBorderColor('#e6e9f0ff');
    setParentBackground('#eef0f1');
    setScrollShadowCoverBG('#ffffff');
    setFlatListLineColor('#00000017');
    setBottomShadowCoverBG('#666666');
  };

  return (
    <ThemeMainContext.Provider
      value={{
        parentBackground,
        scrollShadowCoverBG,
        textColor,
        objectColor,
        optionColor,
        objectBorderColor,
        flatListLineColoe,
        bottomShadowCoverBG,
        setDarkMode,
        setLightMode,
      }}
    >
      {children}
    </ThemeMainContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeMainContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a AppContext');
  }
  return context;
};