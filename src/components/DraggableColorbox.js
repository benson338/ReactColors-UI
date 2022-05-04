import styled from '@emotion/styled';

const Root = styled.div`
  background: ${(prop) => prop.color};
  height: 25%;
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  // margin-bottom: -3.5px;
  text-transform: uppercase;
`;

function DraggableColorbox({ color }) {
  return <Root color={color}>{color}</Root>;
}

export default DraggableColorbox;
