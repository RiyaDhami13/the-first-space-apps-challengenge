const buttonHome = document.getElementById('button-home');
const buttonRestart = document.getElementById('button-restart');
const text = document.querySelector('.text');
gsap.registerPlugin(TextPlugin);

document.addEventListener('DOMContentLoaded', () => {
    let landing = gsap.timeline();

    landing.to('.star', 0.8, {opacity: 1, repeat: -1, yoyo: "true"})
        .set('.text', {text: `on the destination .<p>The spacecraft has landed.<p>`})
        .to('.moon', 2, {bottom: '-2300px'})
        .to('.spaceship', 3, {top: '247px'})
        .to('.flame', 2, {bottom: '23px', ease: "sine.in"}, "-=2.4")
        .to('.text', 0.5, {delay: 1, autoAlpha: 1, top: '0px'})
        .to('#button-home', 0.8, {delay: 1, scale: 1, ease: "back.out(1.7)", autoAlpha: 1})
    
    buttonRestart.addEventListener('click', () => {

        let restartIcon = gsap.timeline();

        restartIcon.to('#button-restart', 2, {scale: 0, rotation: 360, transformOrigin: '50%', ease: "power4.out"})
            .to('#button-restart', {clearProps: 'all'})

        landing.restart()
    });
    
    // landing.seek(100);
    // landing.pause();
});

buttonHome.addEventListener('click', () => {
    let liftOff = gsap.timeline();

    liftOff.to('.text', {clearProps: 'all'})
        .set('.text', {text: "3, 2, 1..."})
        .to('.text', 0.5, {opacity: '1', top: '0px'})
        .to('.text', {delay: 1.5, clearProps: 'all'})
        .set('.text', {text: "Ignition"})
        .to('.text', 0.5, {opacity: '1', top: '0px'})
        .to('.flame', 0.4, {bottom: '-8px'}, "-=0.3")
        .to('.text, #button-home', 0.5, {delay: 1, autoAlpha: 0})
        .to('.text', {clearProps: 'all'})
        .to('#button-home', {clearProps: 'all'})

        .to('.spaceship', 3, {top: '-250px', ease: 'sine.in'})
        .to('.moon', 1.7, {bottom: '-2400px'}, "-=1.6")
        .to('#button-restart', 0.8, {delay: 1, scale: 1, ease: "back.out(1.7)"})
    
});