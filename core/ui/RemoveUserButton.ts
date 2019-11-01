import { css } from 'emotion';
import Button from './Button';

export default () => css`
  ${Button()}
  border-radius: 50%;
  font-size: 20px;
  height: 0;
  overflow: hidden;
  padding: 50px 0 0 0;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: calc(50% - 12px);
  transform: translateY(-50%);
  width: 50px;

  &:hover {
    background: #eee;
  }

  &::before {
    color: #666;
    content: "×";
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
