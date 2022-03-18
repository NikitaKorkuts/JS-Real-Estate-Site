let house_id = 0;

function showContent(data){	

	document.getElementById("price").innerHTML = `$${data.price.toLocaleString()}`;
	document.getElementById("seller").innerHTML = data.seller;
	document.getElementById("info").innerHTML = data.info;
	document.getElementById("address").innerHTML = data.address;
	document.getElementById("property_details").innerHTML = data.property_details;
	document.getElementById('map').src = data.map_url;
	
}

function turnSlide(n){
	let house_url = `https://my-json-server.typicode.com/NikitaKorkuts/house_sale/house${house_id + n}`;

	sendRequest('GET', house_url)
		.then(data => {
			house_id = house_id + n;

			showContent(data);

			let images = data.images_url.split(', ');
			
			removeSliderImgs();
			addSliderImgs(images);

			removeGalleryImgs();
			addGalleryImgs(images);
		})
		.catch(err => console.log(err))
}

turnSlide(1)