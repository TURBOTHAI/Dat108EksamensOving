class Trafikkontroller {
	#nedregrense;
	#ovregrense;
	#tbodyelement;
	#billiste = [];
	#tidspunktFelt;
	#bilnummerFelt;
	
	constructor(felt1, felt2) {
		// Legg inn kode for felt 1, felt for å registrere bilpassering
		// Legg inn kode for å vise dagens dato i felt1 sitt <legend>
		// Kode for felt2, felt for å liste bilpasseringer
		this.#nedregrense = felt2.getElementsByTagName("input")[0];
		this.#ovregrense = felt2.getElementsByTagName("input")[1];
		this.#tbodyelement = felt2.getElementsByTagName("tbody")[0];
		
		const dagensDato = new Date().toISOString().split("T")[0];
		
		felt1.querySelector("button").addEventListener(
			"click",
			() => { this.#registrerpassering();	}
		);
		
		
		
		felt2.querySelector("button").addEventListener(
			"click",
			() => { this.#vispasseringer() }
		);
	}
	#vispasseringer() {
		// Legg inn kode her for å liste bilpasseringer
	}
	// Legg til metode for å registrere en bilpassering
	// Legg til eventuelle hjelpemetoder
	
	
	
	
	
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new Trafikkontroller(felt1, felt2);