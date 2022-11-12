const showLowfiPrototype = (num) => {
  const gallery = document.getElementById("prototype-selector");
  if (document.body.contains(document.getElementById("prototype-img"))) {
    const child = document.getElementById("prototype-img");
    gallery.removeChild(child);
  }

  var br = document.createElement("br");

  let div = document.createElement("div");
  div.setAttribute("class", "text-center");
  div.setAttribute("style", "width:100%");
  div.setAttribute("id", "prototype-img");

  let img = document.createElement("img");
  switch(num){
    case 1:
      img.src = "img/Phone.png";
      img.alt = "Phone Wireframe";
      break;
    case 2:
      img.src = "img/Tablet.png";
      img.alt = "Tablet Wireframe";
      break;
    default:
      img.src = "img/PC.png";
      img.alt = "Computer Wireframe";
      break;
  }
  img.setAttribute("class", "prototype-img rounded mb-5");

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
