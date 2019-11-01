import { css } from 'emotion';

export default () => css`
  border-bottom: 1px solid #ccc;
  height: 72px;
  overflow: hidden;
  padding-bottom: 25px;
  position: relative;
  margin-top: 25px;
  text-align: left;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;

    button {
      top: 50%;
    }
  }

  img {
    float: left;
    height: 72px;
    margin-right: 15px;
    width: 72px;
  }

  h1 {
    color: #666;
    font-size: 16px;
    font-family: sans-serif;
    margin: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  button {
    display: inline-block;
  }
`;
