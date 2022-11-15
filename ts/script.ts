
var header: any = document.createElement("h1");
header.classList.add("p-3", "text-center", "text-dark");
header.innerHTML = "Product List"
document.body.appendChild(header);


var container: any = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

var row: any = document.createElement("div");
row.classList.add("row", "g-3");
container.appendChild(row);


fetch("https://fakestoreapi.com/products")
	.then((res: any) => res.json())
	.then((data: any) => {
		data.map((fd: any) => {
			let col: any = document.createElement("div");
			col.classList.add("col-12", "col-md-6", "col-lg-3" );
			row.appendChild(col);

			let card: any = document.createElement("div");

            let figure: any = document.createElement("div");
            figure.classList.add("h-75", "d-flex", "flex-column", "justify-content-center", "align-items-center")
            
			card.classList.add("card", "p-4", "h-100", "shadow");
            
			figure.innerHTML = `<img src=${fd.image} class= "h-auto mw-100 overflow-hidden p-3" alt="err">`;
            card.appendChild(figure);
            
			col.appendChild(card);

            let cardBody: any = document.createElement("div");
            cardBody.classList.add( "d-flex", "h-25", "flex-column", "justify-content-end", "align-items-center");
            card.appendChild(cardBody);

            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerHTML = `${fd.title}`;

            cardBody.appendChild(cardTitle)
		});
	});
