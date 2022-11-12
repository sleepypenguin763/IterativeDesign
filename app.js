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

const showWireframe = (num) => {
  const gallery = document.getElementById("wireframe-selector");
  if (document.body.contains(document.getElementById("wireframe-img"))) {
    const child = document.getElementById("wireframe-img");
    gallery.removeChild(child);
  }

  var br = document.createElement("br");

  let div = document.createElement("div");
  div.setAttribute("class", "text-center mx-auto");
  div.setAttribute("style", "width:50%");
  div.setAttribute("id", "wireframe-img");

  let img = document.createElement("img");
  switch(num){
    case 1:
      img.src = "img/lowfi_landing.jpg";
      img.alt = "lowfi_landing.jpg";
      break;
    case 2:
      img.src = "img/lowfi_messages.jpg";
      img.alt = "lowfi_messages.jpg";
      break;
    case 3:
      img.src = "img/lowfi_cc_home.png";
      img.alt = "lowfi_cc_home.png";
      break;
    case 4:
      img.src = "img/lowfi_cc_business.png";
      img.alt = "lowfi_cc_business.png";
      break;
    case 5:
      img.src = "img/lowfi_cc_profile.jpg";
      img.alt = "lowfi_cc_profile.jpg";
      break;
    case 6:
      img.src = "img/lowfi_cart.jpg";
      img.alt = "lowfi_cart.jpg";
      break;
    case 7:
      img.src = "img/lowfi_brand_home.jpg";
      img.alt = "lowfi_brand_home.jpg";
      break;
    case 8:
      img.src = "img/lowfi_brand_business.png";
      img.alt = "lowfi_brand_business.png";
      break;
    case 9:
      img.src = "img/lowfi_brand_profile.jpg";
      img.alt = "lowfi_cc_profile.jpg";
      break;
    default:
      img.src = "img/lowfi_team.jpg";
      img.alt = "lowfi_team.jpg";
      break;
  }
  img.setAttribute("class", "wireframe-img rounded mb-5 w-50");

  div.append(br);
  div.appendChild(img);
  gallery.append(div);
};
