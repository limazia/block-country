import React from 'react';

import './styles.css';

function Loading() {
  document.body.style.overflowY = "hidden";

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center loading-box">
        <div className="spinner-border loading"></div>
      </div>
    </div>
  );
}

export default Loading;
