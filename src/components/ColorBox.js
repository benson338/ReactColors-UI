import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import '../styles/ColorBox.css';
import chroma from 'chroma-js';
import styled from '@emotion/styled';

const StyledColorBox = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -4px;
  text-transform: uppercase;

  .copy-button {
    width: 100px;
    height: 30px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -15px;
    text-transform: uppercase;
    text-align: center;
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    color: white;
    line-height: 30px;
    opacity: 0;
  }

  :hover .copy-button {
    opacity: 1;
    transition: ease-in 0.3s;
  }

  .box-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: black;
    letter-spacing: 1px;
    font-size: 12px;
  }

  .see-more {
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .copy-overlay {
    opacity: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    transition: transform 1s ease-in-out;
    /* 0.6s previous */
    transform: scale(0.1);
  }
  .copy-overlay.show {
    opacity: 1;
    transform: scale(50);
    z-index: 10;
    position: absolute;
  }

  .copy-msg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    opacity: 0;
    transform: scale(0.1);
    color: white;
  }
  .copy-msg.show {
    opacity: 1;
    transform: scale(1);
    z-index: 25;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.3s;
  }

  .copy-msg h1 {
    font-weight: 400;
    text-shadow: 1px 2px #000;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 1rem;
  }
  .copy-msg p {
    font-size: 2rem;
    font-weight: 100;
    text-transform: lowercase;
  }
`;

function ColorBox({ background, name, moreUrl, showLink }) {
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
}

export default ColorBox;
