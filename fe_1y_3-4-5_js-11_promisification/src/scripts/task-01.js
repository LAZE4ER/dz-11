const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
 let timerId;
 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const buttonStart = document.querySelector(".startButton")
  const buttonEnd = document.querySelector(".stopButton")
 let body = document.body

 buttonStart.addEventListener('click', () =>{
  buttonStart.disabled = true
  buttonEnd.disabled = false
   timerId = setInterval(() => {
const  randomIndex = randomIntegerFromInterval(0, colors.length - 1)
    body.style.backgroundColor = colors[randomIndex]
  }, 1000);
  
 } )

 buttonEnd.addEventListener('click', () =>{
  buttonStart.disabled = false
  buttonEnd.disabled = true
  clearInterval(timerId)

  
 })
 
