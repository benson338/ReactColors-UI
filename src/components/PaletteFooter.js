import styled from '@emotion/styled';

function PaletteFooter({ paletteName, emoji }) {
  return (
    <StyledFooter>
      {paletteName}
      <span className="emoji">{emoji}</span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .emoji {
    font-size: 1.2rem;
    margin: 0 1rem;
    margin-top: -4px;
  }
`;

export default PaletteFooter;
