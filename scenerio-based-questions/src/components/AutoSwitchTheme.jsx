import React from "react";

const AutoSwitchTheme = () => {
  const hour = new Date().getHours();

  const isDarkTheme = hour >= 18 || hour <= 6;
  return <div className={isDarkTheme ? "dark" : "light"}>AutoSwitchTheme</div>;
};

export default AutoSwitchTheme;
