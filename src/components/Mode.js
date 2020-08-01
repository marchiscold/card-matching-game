import React from 'react';
import bugLogo from '../images/bug_logo.jpg';
import fishLogo from '../images/fish_logo.jpg';
import styles from './GameStart.module.css';
import classnames from 'classnames';


function Mode({ activeMode, onModeChange }) {
  const modes = [
    {
      id: "bugs",
      isActive: activeMode === "bugs",
      desc: "bugs",
      logo: bugLogo,
    },
    {
      id: "aquatic",
      isActive: activeMode === "aquatic",
      desc: "aquatic",
      logo: fishLogo,   
    },
  ];

  const modeList = modes.map((mode) => {
    const modeClass = classnames(styles["mode__item"], { [styles["active"]]: mode.isActive });
    return (
      <div
        key={mode.id}
        className={modeClass}
        style={{ backgroundImage: `url(${mode.logo})` }}
        onClick={() => onModeChange(mode.desc)}
      >
        <div className={styles["mode__overlay"]}></div>
        <div className={styles["mode__description"]}>{mode.desc}</div>
      </div>
    );
  });

  return (
    <div className={styles["start-screen__mode"] + ' ' + styles["mode"]}>{modeList}</div>
  )
}

export default Mode;
