function update() {
  let cardBody = document.getElementById("targetObject1");
  let cardText = document.getElementById("targetObject2");
  let selection = document.getElementById("selection").value;
  let input = document.getElementById("inputValue").value;

  switch (selection) {
    case "Warna Latar":
      cardBody.style.backgroundColor = input;
      break;
    case "Warna Text":
      cardText.style.color = input;
      break;
    case "Ukuran Text":
      cardText.style.fontSize = input + "px";
      break;
    case "Jenis Font":
      cardText.style.fontFamily = input;
      break;
    case "Lebar Konten":
      cardBody.style.width = input + "px";
      break;
    case "Tinggi Konten":
      cardBody.style.height = input + "px";
      break;
    default:
      break;
  }
}

