const preview = document.querySelector("#preview");
const previewText = document.querySelector("#preview h1");

const net = new brain.NeuralNetwork();

// training network

net.train([
  // if color is black
  { input: { red: 0, green: 0, blue: 0 }, output: { color: 1 } },
  //   if color is white
  { input: { red: 1, green: 1, blue: 1 }, output: { color: 0 } },
  //   if color is red
  { input: { red: 1, green: 0, blue: 0 }, output: { color: 1 } },
  //   if color is green
  { input: { red: 0, green: 1, blue: 0 }, output: { color: 0 } },
  //   if color is blue
  { input: { red: 0, green: 0, blue: 1 }, output: { color: 1 } },
  //   if color is yellow
  { input: { red: 1, green: 1, blue: 0 }, output: { color: 0 } },
  //   if color is ?
  { input: { red: 0, green: 1, blue: 1 }, output: { color: 1 } },
]);

// on update color

function update(color) {
  preview.style.background = color;

  const input = {
    red: color.channels.r / 255,
    green: color.channels.g / 255,
    blue: color.channels.b / 255,
  };

  //   running neural network
  const output = net.run(input);

  if (Math.round(output.color) > 0) {
    previewText.style.color = "#fff";
  } else {
    previewText.style.color = "#111";
  }
}

// setInterval(() => {
//   let randomColor = `#`;

//   for (let i = 0; i < 6; i++) {
//     const random = Math.random();
//     const bit = (random * 16) | 0;
//     randomColor += bit.toString(16);
//   }

//   preview.style.background = randomColor;
// }, 1000);
