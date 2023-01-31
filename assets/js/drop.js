let items = document.querySelectorAll(".item");
let dropZone = document.querySelectorAll(".dropzone");

items.forEach((item) => {
  item.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("id", event.target.id);
  });
});

dropZone.forEach((drop) => {
  drop.addEventListener("dragover", function (event) {
    event.preventDefault();
  });
  drop.addEventListener("drop", function (event) {
    let id = event.dataTransfer.getData("id");
    let draggleElement = document.getElementById(id);

    // console.log(draggleElement);
    this.append(draggleElement);
  });
});
