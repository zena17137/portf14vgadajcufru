// ! Preparing

const btn_1 = document.getElementById('btn_1');

let lang;

function ukraine_english() {
	lang = 'english';
	document.getElementById('body').innerHTML = `<h3>Вгадай цифру від 0 до 9 (Guess number 0 to 9)</h3>
																<input type="number" id="input" tabindex="1" />
																<p id="out"></p>
																<p id="count"></p>
																<button id="btn" tabindex="2" style="user-select: none;">Провірити (Check)</button>
																<br>
																<span style="font-size: 16px; color: red;">Created by Kokidko Sergiy</span>`;

	const inp = document.getElementById('input');
	const out = document.getElementById('out');
	const submit = document.getElementById('btn');
	const countHTML = document.getElementById('count');

	const number = Math.floor(Math.random() * (9 - 1 + 1) + 1);

	console.log(number);

	let count = 3;

	countHTML.innerHTML = `Ти маєш ${count} спроб (You have got ${count} atemps)`;
	submit.addEventListener('click', (e) => {
		if (count > 0) {
			const userNum = parseInt(inp.value);

			if (userNum === number) {
				out.innerHTML = 'Ти виграв (You winner)';
			} else if (userNum > number) {
				out.innerHTML = 'Число менше за твоє (The number is less than yours)';
			} else if (userNum < number) {
				out.innerHTML = 'Число більше за твоє (Number More than yours)';
			}

			setTimeout(() => {
				out.innerHTML = '';
			}, 3000);

			count--;
			if (count < 1) {
				out.innerHTML = '';
				countHTML.innerHTML = `You fail :(`;
				setTimeout(() => {
					alert('You fail :(' + '\n' + `Число було ${number} (Number is ${number})`);
					location.reload();
				}, 500);
			} else {
				countHTML.innerHTML = `Ти маєш ${count} спроб (You have got ${count} atemps)`;
			}
		}
	});
}

btn_1.onclick = ukraine_english;
