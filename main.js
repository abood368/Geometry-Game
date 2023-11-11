const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.width;

c.fillStyle = 'black';
c.arc(300, 300, 50, 0, Math.PI * 2, false);
c.fill();
