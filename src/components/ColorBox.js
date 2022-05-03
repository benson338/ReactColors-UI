import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import '../styles/ColorBox.css';
import chroma from 'chroma-js';

const ColorBox = ({ background, name, moreUrl, showLink }) => {
  const [copy, setCopy] = useState(false);
  const changeCopyState = () => {
    setCopy(true);
  };
  const isDarkColor = chroma(background).luminance() <= 0.1;
  const isLightColor = chroma(background).luminance() >= 0.65;

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  }, [copy]);

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="Colorbox" style={{ background }}>
        <div
          className={`copy-overlay ${copy && 'show'}`}
          style={{ background }}
        />
        <div className={`copy-msg ${copy && 'show'}`}>
          <h1>Copied!</h1>
          <p className={isLightColor && 'dark-color'}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor && 'light-color'}>
              {name} {chroma(background).luminance()}
            </span>
          </div>
          <button className={`copy-button ${isLightColor && 'dark-color'}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            // to={`/palette/${paletteId}/${colorId}`}
            to={moreUrl}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`see-more ${isLightColor && 'dark-color'}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
