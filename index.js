const startBtn = document.querySelector('button[data-action="start"');
const stopBtn = document.querySelector('button[data-action="stop"');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor(){
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  console.log(randomColor)
  document.body.style.backgroundColor = randomColor
};

let interval = undefined;

startBtn.addEventListener('click', e => interval = interval ?
interval :
setInterval(() => setRandomColor(), 1000));

stopBtn.addEventListener('click', e => clearInterval(interval));
