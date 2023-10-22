const rocket = document.getElementById('rocket');
const touchArea = document.getElementById('touchArea');

touchArea.addEventListener('click', () => {
    rocket.style.transform = 'translateY(-100vh)';
    rocket.style.animation = 'launch 5s ease-in-out forwards';
});
