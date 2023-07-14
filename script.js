var tl=gsap.timeline()
tl.from("#nav img,#nav h3,#nav h3,#nav h4, #nav button",{
     y:-100,
     duration:0.6,
     delay:1,
     opacity:0,
     stagger:0.5
     
})
tl.from("#main #left-img",{
    scale:0,
    opacity:0
 })
 gsap.from("#main #right-img",{
    duration:0.5,
    delay:4.1,
    opacity:0,
    scale:0
 })
var tm=gsap.timeline()
tm.from("#main h1",{
   y:200,
    
    duration:0.6,
    delay:1,
    opacity:0,stagger:1
})
tm.from("#main h5",{
    scale:0,
    opacity:0
})
tm.to("#main h5",{
    y:40,
    repeat:-1,
    // opacity:0,
    duartion:1,
    yoyo:true
})
 