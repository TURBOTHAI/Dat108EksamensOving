class Vennkontroller {
	#navnefelt;
	#alderfelt;
	#tbody;
	#venner = [];
	// Fyll inn evt. flere felt
	constructor(felt1, felt2) {
		
		// Kode for felt1, felt for å registrere venn
		this.#navnefelt = felt1.getElementsByTagName("input")[0];
		this.#alderfelt = felt1.getElementsByTagName("input")[1];
		//this.#tbody = felt2.querySelector("tbody");
		
		const span
		
		felt1.querySelector("button").addEventListener(
			"click",
			() => { this.#registrervenn() }
		);
		
		// Legg inn evt. mere kode her
	}
	#registrervenn() {
		/* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
		som vises i Skjermbilde 2 */
		
		const navn = this.
	}
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);