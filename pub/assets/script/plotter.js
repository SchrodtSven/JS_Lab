/**
 * Simple ECMAScript class, supporting function drawings
 * 
 * @author Sven Schrodt
 * @since 2026-01-27
 */


document.addEventListener("DOMContentLoaded", (event) => {
     p = new Plotter(768, 1024);
});


class Plotter {

     // default properties for canvas 
     height = 800;
     width = 1400;

     lineWidth = 1;

     constructor(height, width) {
          this.height = height | this.height;
          this.width = width | this.width;
          const canvas = document.getElementById("plot");
          this.ctx = canvas.getContext("2d");
          console.table(this.ctx);
          this.quarterX = this.width / 2;
          this.quarterY = this.height / 2;

          this._initCoordSys();
          this.grid(33,'black');


          this.drawFunc(function (x) {
               return Math.sin(x); // The function
          }, 'red');


          this.drawFunc(function (x) {
               return Math.cos(x); // The function
          }, 'green');

          this.drawFunc(function (x) {
               return Math.tan(x); // The function
          }, 'blue', 33, 1);






          //this.ctx.lineWidth = 6;
          //console.log(this.ctx);
          this.drawFunc(function (x) {
               return x * x * x; // The function
          }, 'yellow', 50, 1);


          this.drawFunc(function (x) {
               return Math.tan(x); // The function
          }, 'blue', 33, 1);

          this.drawFunc(function (x) {
               return x*x; // The function
          }, 'gray', 55, 1.9);


     }

     set width(val) {
          this.width = val;
          this._initCoordSys();
          return this;
     }

     get width() {
          return this.width;
     }

     set height(val) {
          this.height = val;
          this._initCoordSys();
          return this;
     }

     get height() {
          return this.height;
     }

     set lineWidth(val) {
          this.ctx.lineWidth = val;
          console.log(this.ctx.lineWidth);
          console.log(val);
          return this;
     }

     get lineWidth() {
          return this.ctx.lineWidth;
     }


     /**
      * Init as cartesian coordinate system:
      * 
      *  - Scale/translate 
      *  - Draw axes
      */

     _initCoordSys() {

          this.ctx.clearRect(0, 0, this.width, this.height); // Clear canvas

          // Save curent context's state  
          this.ctx.save();
          
          // Coordinate System Shift: Move (0,0) to center
          this.ctx.translate(this.width / 2, this.height / 2);
          this.ctx.scale(1, -1); // Flip Y-axis -> we want a Cartesian Graph

          // Draw border
          this.ctx.beginPath();
          this.ctx.moveTo(-this.quarterX, -this.quarterY);
          this.ctx.lineTo(this.quarterX, -this.quarterY);
          this.ctx.lineTo(this.quarterX, this.quarterY);
          this.ctx.lineTo(-this.quarterX, this.quarterY);
          this.ctx.closePath();
          this.ctx.stroke();
          
          // Draw axes
          this.ctx.beginPath();
          this.ctx.moveTo(-this.width / 2, 0);
          this.ctx.lineTo(this.width / 2, 0); // X-axis
          this.ctx.moveTo(0, -this.height / 2);
          this.ctx.lineTo(0, this.height / 2); // Y-axis
          this.ctx.strokeStyle = '#123';
          this.ctx.stroke();
          

     }

     grid(step = 20, color='gray') {
          this.ctx.strokeStyle = color;
          //let y= 23;
          //this.ctx.lineWidth = 10;;

          this.ctx.beginPath();


          for (let x = -this.quarterX; x <= this.quarterX; x += step) {
               for (let y= -this.quarterY; y <= this.quarterY; y += step) {
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x+1, y);
               }
          }

          this.ctx.stroke();
     }

     resetCoordSys() {
          this.ctx.restore(); // Restore context
     }

     /**
      * Drawing function graph 
      * 
      * @param {*} clj - closure/function
      * @param {*} color  
      * @param {*} scaleX 
      * @param {*} scaleY 
      */
     drawFunc(clj, color = 'green', scaleX = 50, scaleY = 200) {
          this.ctx.beginPath();

          let x = -scaleX
          let y = clj(x)

          let px = x * scaleX;
          let py = y * scaleY;


          this.ctx.moveTo(px, py);

          for (let x = - scaleX; x <= scaleX; x += 0.1) {
               let y = clj(x)
               let px = x * scaleX;
               let py = y * scaleY;

               this.ctx.strokeStyle = color;
               this.ctx.lineTo(px, py);
          }
          //this.ctx.closePath();
          this.ctx.stroke();
     }

}




