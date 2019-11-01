import { css } from 'emotion';

interface IButton {
  fontSize?: number;
}

const Button = (props = {} as IButton) => css`
  border: 0;
  cursor: pointer;
  padding: 5px 10px;
  font-size: ${props.fontSize || 16}px;

  &:disabled {
    opacity: .3;
  }
`;

export default Button;
