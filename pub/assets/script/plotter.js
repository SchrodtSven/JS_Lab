/**
 * Simple ECMAScript class, supporting function drawings
 * 
 * @author Sven Schrodt
 * @since 2026-01-27
 */


document.addEventListener("DOMContentLoaded", (event) => {
     p = new Plotter(800, 1400);
});


class Plotter {

     // Private properties
     height = 800
     width = 1400
     constructor(height, width) {
          this.height = height | this.height;
          this.width = width | width;
          const canvas = document.getElementById("plot");
          this.ctx = canvas.getContext("2d");
          this.quarterX = this.width / 2;
          this.quarterY = this.height / 2;

          this._initCoordSys();
          this.grid();


          this.drawFunc(function (x) {
               return Math.sin(x); // The function
          }, 'red');


          this.drawFunc(function (x) {
               return Math.cos(x); // The function
          }, 'green');

          this.drawFunc(function (x) {
               return Math.tan(x); // The function
          }, 'blue', 33, 2);
     }

     set width(val) {
          this.width = val;
     }

     get width() {
          return this.width;
     }

     set height(val) {
          this.height = val;
     }

     get height() {
          return this.height;
     }

     /**
      * Init as cartesian coordinate system:
      * 
      *  - Scale/translate 
      *  - Draw axes
      */

     _initCoordSys() {
          let width = this.width;
          let height = this.height
          this.ctx.clearRect(0, 0, this.width, this.height); // Clear canvas
          // Coordinate System Shift: Move (0,0) to center
          this.ctx.save();
          this.ctx.translate(width / 2, height / 2);
          this.ctx.scale(1, -1); // Flip Y-axis for Cartesian graph

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
          this.ctx.moveTo(-width / 2, 0);
          this.ctx.lineTo(width / 2, 0); // X-axis
          this.ctx.moveTo(0, -height / 2);
          this.ctx.lineTo(0, height / 2); // Y-axis
          this.ctx.strokeStyle = '#123';
          //this.ctx.strokeStyle = 'pink';
          //this.ctx.closePath();
          this.ctx.stroke();
          //console.table(this.ctx);
          //console.table(this);
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




