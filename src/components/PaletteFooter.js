import styled from '@emotion/styled';

function PaletteFooter({ paletteName, emoji }) {
  return (
    <StyledFooter>
      {paletteName}
      <span className="emoji">{emoji}</span>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // z-index: 5;
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;

  .emoji {
    font-size: 1.2rem;
    margin: 0 1rem;
    margin-top: -4px;
  }
`;

export default PaletteFooter;
