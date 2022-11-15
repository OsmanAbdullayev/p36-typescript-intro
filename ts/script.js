var header = document.createElement("h1");
header.classList.add("p-3", "text-center", "text-dark");
header.innerHTML = "Product List";
document.body.appendChild(header);
var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
var row = document.createElement("div");
row.classList.add("row", "g-3");
container.appendChild(row);
fetch("https://fakestoreapi.com/products")
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.map(function (fd) {
        var col = document.createElement("div");
        col.classList.add("col-12", "col-md-6", "col-lg-3");
        row.appendChild(col);
        var card = document.createElement("div");
        var figure = document.createElement("div");
        figure.classList.add("h-75", "d-flex", "flex-column", "justify-content-center", "align-items-center");
        card.classList.add("card", "p-4", "h-100", "shadow");
        figure.innerHTML = "<img src=".concat(fd.image, " class= \"h-auto mw-100 overflow-hidden p-3\" alt=\"err\">");
        card.appendChild(figure);
        col.appendChild(card);
        var cardBody = document.createElement("div");
        cardBody.classList.add("d-flex", "h-25", "flex-column", "justify-content-end", "align-items-center");
        card.appendChild(cardBody);
        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = "".concat(fd.title);
        cardBody.appendChild(cardTitle);
    });
});
