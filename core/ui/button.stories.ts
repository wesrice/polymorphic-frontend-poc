import Button from './Button';
// import LargeButton from './LargeButton';

export default { title: 'Button' };

export const basic = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  button.classList.add(Button());
  return button;
};

export const large = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  // button.classList.add(LargeButton());
  return button;
};
