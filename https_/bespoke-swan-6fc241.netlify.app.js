const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'black';
overlay.style.opacity = '0.8';
overlay.style.zIndex = '9999';

const message = document.createElement('div');
message.style.position = 'fixed';
message.style.top = '50%';
message.style.left = '50%';
message.style.transform = 'translate(-50%, -50%)';
message.style.color = 'white';
message.style.fontSize = '72px';
message.style.fontWeight = 'bold';
message.style.zIndex = '10000';
message.innerText = 'MEOW NOT GOOD TO STEAL THE CODE';

document.body.appendChild(overlay);
document.body.appendChild(message);
