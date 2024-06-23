//const cursor_circle = document.querySelector(".cursor-circle"),
    //cursor = document.querySelectorAll(".cursor"),
    //image_wrap = document.querySelector(".image-wrap");

let timeline = gsap.timeline({
    defaults: { duration: 1.3, ease: "power3.inOut" },
});

timeline
  .to(
  ".image-wrap", 
  {
    height: "550px",
    backgroundSize: "105%",
    duration: 2,
    ease: "power4.inOut",
  })
  .to(
   ".image-wrap", 
   {
    height: "250px",
    backgroundPosition: "50% 58%", 
    y: "0",
  }, 
  2
)
  .from(
    ".big-name", 
    {
    y: getYDistance(".big-name"),
  }, 
  2
)
.from(
  ".hide", 
  {
    opacity: "0",
  },
  2
);

//function getYDistance(el) {
  //return (
 //   window.innerHeight - document.querySelector(el).getBoundingClientRect().
   //  top
 //);
//}

//window.addEventListener("mousemove", (e) => {
    //let xPosition = e.clientX;
    //let yPosition = e.clientY;

    //cursor.forEach(el => {
       // el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
       // el.style.opacity = "1";
   // });
//});

//image_wrap.addEventListener("mousemove", (e) => {
    //let rect = image_wrap.getBoundingClientRect(),
   // x = e.clientX - rect.left,
   // y = e.clientY - rect.top;

   // let xSpeed = 0.008, 
   // ySpeed = 0.005;

    //let xMoving = x - image_wrap.clientWidth / 2;
   // let yMoving = y - image_wrap.clientHeight / 2;
    
    //image_wrap.style.backgroundPosition = `calc(50% + ${xMoving * xSpeed}px) calc(58% + ${yMoving * ySpeed}px)`;
//});

//image_wrap.addEventListener("mouseover", () => {
  //  image_wrap.style.transition = ".2s background-position";
    //setTimeout(() => {
       // image_wrap.style.transition = "0s background-position";
    //}, 200);
//});

//image_wrap.addEventListener("mouseout", () => {
    //image_wrap.style.transition = ".5s background-position";
    //image_wrap.style.backgroundPosition = "50% 58%";
//});

//setTimeout(() => {
   /// image_wrap.style.pointerEvents = "auto";
//}, timeline.endTime() * 1000);