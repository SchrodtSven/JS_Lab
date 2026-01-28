/**
 * Playing with canvas web API
 * 
 * @author Sven Schrodt
 * @since 2026-01-26
 */


// Starting after DOM has been filly loaded
document.addEventListener("DOMContentLoaded", (event) => {
  msg = "DOM fully loaded and parsed";
  console.log(msg);
  
  const canvas = document.getElementById("ui-layer");
  let ctx = canvas.getContext("2d");

  w = canvas.width;
  h = canvas.height;
  axes(ctx, w, h)
  draw(ctx, w, h);
  //pie(ctx);
});



function draw(ctx, w, h) {

  // const canvas = document.getElementById("ui-layer");
  // let ctx = canvas.getContext("2d");
  ctx.moveTo(0, h/2);
  ctx.lineTo(w, h/2);
  ctx.moveTo(w/2, 0);
  ctx.lineTo(w/2, h);
  
  ctx.stroke();
}



function axes(ctx, w, h) {

  ctx.moveTo(0, 0);
  ctx.lineTo(w-1, 0);
  ctx.lineTo(w-1, h-1);
  ctx.lineTo(0, h-1);
  ctx.lineTo(0,0 );
  ctx.stroke();
}

function pie(ctx) {
  const results = [
    { name: "Satisfied", count: 1043, color: "lightblue" },
    { name: "Neutral", count: 563, color: "lightgreen" },
    { name: "Unsatisfied", count: 510, color: "pink" },
    { name: "No comment", count: 175, color: "silver" },
    { name: "No comment", count: 2056, color: "gold" }
  ];


  

  //let cx = document.querySelector("ui-layer").getContext("2d");
  let total = results
    .reduce((sum, { count }) => sum + count, 0);
  // Start at the top
  let currentAngle = 0.5 * Math.PI;
  for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    ctx.beginPath();
    // center=100,100, radius=100
    // from current angle, clockwise by slice's angle
    ctx.arc(100, 100, 100,
      currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    ctx.lineTo(100, 100);
    ctx.fillStyle = result.color;
    ctx.fill();
  }
} 


