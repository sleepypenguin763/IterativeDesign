const showSketches = (num) => {
  const gallery = document.getElementById("sketch-selector");
  if (document.body.contains(document.getElementById("sketch-img"))) {
    const child = document.getElementById("sketch-img");
    gallery.removeChild(child);
  }

  var br = document.createElement("br");

  let div = document.createElement("div");
  div.setAttribute("class", "text-center");
  div.setAttribute("style", "width:100%");
  div.setAttribute("id", "sketch-img");

  let img = document.createElement("img");
  switch(num){
    case 1:
      img.src = "img/sketch_1.jpg";
      img.alt = "Sketch 1";
      break;
    case 2:
      img.src = "img/sketch_2.jpg";
      img.alt = "Sketch 2";
      break;
    case 3:
      img.src = "img/sketch_3.jpg";
      img.alt = "Sketch 3";
      break;
    default:
      img.src = "img/sketch_4.jpg";
      img.alt = "Sketch 4";
      break;
  }
  img.setAttribute("class", "sketch-img rounded mb-5 w-100");

  div.append(br);
  div.appendChild(img);
  gallery.append(div);
};

const togglePhonePrototypeButton = () => {
  var button = document.getElementById("phone-prototype-button");
  button.textContent =
    button.textContent == "Show Prototype for Phones"
      ? "Hide Prototype for Phones"
      : "Show Prototype for Phones";
};

const toggleTabletPrototypeButton = () => {
  var button = document.getElementById("tablet-prototype-button");
  button.textContent =
    button.textContent == "Show Prototype for Tablets"
      ? "Hide Prototype for Tablets"
      : "Show Prototype for Tablets";
};

const togglePCPrototypeButton = () => {
  var button = document.getElementById("desktop-prototype-button");
  button.textContent =
    button.textContent == "Show Prototype for Computers"
      ? "Hide Prototype for Computers"
      : "Show Prototype for Computers";
};
