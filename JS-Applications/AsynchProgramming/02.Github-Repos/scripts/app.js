function noAsyncloadRepos() {

	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	//---
	// const requestPromise = fetch(url);
	// console.log(requestPromise);
	// requestPromise.then(handleResponse);

	// function handleResponse(response) {
	// 	console.log(response);
	// 	const dataPromise = response.json();
	// 	dataPromise.then(handleData);
	// }
	//--- same as 

	//---
	// fetch(url).then(response => response.json().then(handleData));

	// function handleData(data) {
	// 	console.log(data);
	// }
	//---and then this same as

	fetch(url)
		.then(response => {
			if (response.status == 404) {
				throw new Error('User not found')
			}
			response.json()
		})
		.then(data => {
			console.log('Promise fullfilled');
			console.log(data)
			// const ulElement = document.getElementById('repos');
			// ulElement.innerHTML = '';
			// data.forEach(r => {
			// 	const liElement = document.createElement('li');
			// 	liElement.textContent = r.full_name;
			// 	ulElement.appendChild(liElement);
			// })			
		})
		.catch(error => {
			console.log('Promise rejected');
			console.log(error);
		});

}

//---same but with async
async function loadRepos() {

	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		console.log(response);

		if (response.status == 404) {
			throw new Error('User not found')
		}

		const data = await response.json();
		console.log('Promise fullfilled');
		console.log(data)

		const ulElement = document.getElementById('repos');
		ulElement.innerHTML = '';
		data.forEach(r => {
			const liElement = document.createElement('li');
			liElement.textContent = r.full_name;
			ulElement.appendChild(liElement);
		});
	} catch (error) {
		console.log('Promise rejected');
		console.log(error);
	}
}