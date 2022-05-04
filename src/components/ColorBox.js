import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import styled from '@emotion/styled';

function ColorBox({ background, name, moreUrl, FullPalette }) {
  const [copy, setCopy] = useState(false);
  const changeCopyState = () => {
    setCopy(true);
  };
  // const luminance = chroma(background).luminance();
  const isDarkColor = chroma(background).luminance() <= 0.1;
  const isLightColor = chroma(background).luminance() >= 0.65;

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  }, [copy]);

  const StyledProps = {
    background,
    isLightColor,
    isDarkColor,
    FullPalette,
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <StyledColorBox {...StyledProps}>
        <div className={`copy-overlay ${copy && 'show'}`} />
        <div className={`copy-msg ${copy && 'show'}`}>
          <h1>Copied!</h1>
          <p className="copy-text">{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className="color-name">
              {name} {chroma(background).luminance()}
            </span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {FullPalette && (
          <Link
            // to={`/palette/${paletteId}/${colorId}`}
            to={moreUrl}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        )}
      </StyledColorBox>
    </CopyToClipboard>
  );
}

const StyledColorBox = styled.div`
  background: ${(props) => props.background};
  height: ${(props) => (props.FullPalette ? '25%' : '50%')};
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -4px;
  text-transform: uppercase;

  .copy-button {
    color: ${(props) => (props.isLightColor ? 'rgba(0, 0, 0, 0.6)' : 'white')};
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
    line-height: 30px;
    opacity: 0;
    cursor: pointer;
  }

  &:hover .copy-button {
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

    .color-name {
      color: ${(props) =>
        props.isDarkColor ? 'rgba(255, 255, 255, 0.5)' : 'inherit'};
    }
  }

  .see-more {
    color: ${(props) => (props.isLightColor ? 'rgba(0, 0, 0, 0.6)' : 'white')};
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .copy-overlay {
    background: ${(props) => props.background};
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

    h1 {
      font-weight: 400;
      text-shadow: 1px 2px #000;
      background: rgba(255, 255, 255, 0.2);
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      padding: 1rem;
    }
    p {
      font-size: 2rem;
      font-weight: 100;
      text-transform: lowercase;
    }
    .copy-text {
      color: ${(props) =>
        props.isLightColor ? 'rgba(0, 0, 0, 0.6)' : 'inherit'};
    }
  }
  .copy-msg.show {
    opacity: 1;
    transform: scale(1);
    z-index: 25;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.3s;
  }
`;

export default ColorBox;
