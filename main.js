// Triangle Perimeter Assignment
// HTML Elements
let calcBtn = document.getElementById("calculate");

let inputxA = document.getElementById("xA");
let inputyA = document.getElementById("yA");
let inputxB = document.getElementById("xB");
let inputyB = document.getElementById("yB");
let inputxC = document.getElementById("xC");
let inputyC = document.getElementById("yC");

let spanAB = document.getElementById("ab");
let spanAC = document.getElementById("ac");
let spanBC = document.getElementById("bc");
let spanPerimeter = document.getElementById("perimeter");

calcBtn.addEventListener("click", () => {
  // Get Coordinates from inputs
  let aCoords = {
    x: inputxA.value,
    y: inputyA.value,
  };
  let bCoords = {
    x: inputxB.value,
    y: inputyB.value,
  };
  let cCoords = {
    x: inputxC.value,
    y: inputyC.value,
  };

  let distAB = dist(aCoords, bCoords);
  let distAC = dist(aCoords, cCoords);
  let distBC = dist(bCoords, cCoords);

  spanAB.innerHTML = distAB;
  spanAC.innerHTML = distAC;
  spanBC.innerHTML = distBC;
  spanPerimeter.innerHTML = distAB + distAC + distBC;
});

function dist(coords1, coords2) {
  let a = coords1.x - coords2.x;
  let b = coords1.y - coords2.y;

  let c = Math.sqrt(a ** 2 + b ** 2);

  return c;
}
