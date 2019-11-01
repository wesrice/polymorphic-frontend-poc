import { css } from 'emotion';

export default () => css`
  background: white;
  box-shadow: 0 0 2px rgba(0,0,0,.2);
  left: 50%;
  padding: 50px;
  max-height: 60%;
  overflow-y: scroll;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
`;
