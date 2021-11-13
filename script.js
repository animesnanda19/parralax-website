let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.rock', 3, {y:-300});
timeline.to('.girl', 3, {y: -200},'-=3');
timeline.fromTo('.bg', 3, {y:-50},{y:0, duration:3}, '-=3');
timeline.to('.content',3,{top:'0%'},'-=3');
timeline.fromTo('.content-images', {opacity:0}, {opacity:1, duration:3});
timeline.fromTo('.main-title', {opacity:1}, {opacity:0, duration:6});
let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
});

scene.setTween(timeline).addTo(controller).setPin('section');