import React from 'react';
import bugLogo from './images/bug_logo.jpg';
import fishLogo from './images/fish_logo.jpg';
import classnames from 'classnames';


function Mode({ mode, onModeChange }) {
  const modes = [
    {
      id: "bugs",
      isActive: mode === "bugs",
      desc: "bugs",
      logo: bugLogo,
    },
    {
      id: "aquatic",
      isActive: mode === "aquatic",
      desc: "aquatic",
      logo: fishLogo,   
    },
  ];

  const modeList = modes.map((mode) => {
    const modeClass = classnames("mode__item", { active: mode.isActive });
    return (
      <div
        key={mode.id}
        className={modeClass}
        style={{ backgroundImage: `url(${mode.logo})` }}
        onClick={() => onModeChange(mode.desc)}
      >
        <div className="mode__overlay"></div>
        <div className="mode__description">{mode.desc}</div>
      </div>
    );
  });

  return (
    <div className="start-screen__mode mode">{modeList}</div>
  )
}

export default Mode;
