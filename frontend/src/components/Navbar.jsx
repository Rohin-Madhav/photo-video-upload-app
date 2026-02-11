import React from "react";
import UploaderBtn from "./UploaderBtn";
import { useState } from "react";
import { useMedia } from "./MediaContext";

const Navbar = () => {
  const {fetchMedia} = useMedia();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>ChromaDrive </h2>
        </div>
        <div>
          <UploaderBtn
            onUploadSuccess={fetchMedia}
            label="Upload ⬆️"
            className="nav-btn"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
