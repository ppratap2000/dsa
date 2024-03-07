// function laterallyInvertedStarPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let s = 0; s < n - i - 1; s++) {
//       row += " ";
//     }
//     for (let j = 0; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// laterallyInvertedStarPattern(5);

// function hollowRectanglePattern(n, m) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < m; j++) {
//       if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
//         row += "* ";
//       } else {
//         row += "  ";
//       }
//     }
//     console.log(row);
//   }
// }

// hollowRectanglePattern(5, 8);

function customPattern(n) {
  // Upper part
  for (let i = 1; i <= n; i++) {
    let row = "*".repeat(i); // Repeat asterisks based on the current row number
    console.log(row);
  }

  // Lower part
  for (let i = n - 1; i >= 1; i--) {
    let row = "*".repeat(i);
    console.log(row);
  }
}

customPattern(5);
