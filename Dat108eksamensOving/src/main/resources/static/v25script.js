class Vennkontroller {
	#navnefelt;
	#alderfelt;
	#tbody;
	#venner = [];
	// Fyll inn evt. flere felt
	constructor(felt1, felt2) {
		
		// Kode for felt1, felt for å registrere venn
		this.#navnefelt = felt1.getElementsByTagName("input")[0];//navnene kommer til å bli plasser inn i tab0
		this.#alderfelt = felt1.getElementsByTagName("input")[1];//alder kommer til å bli plassert inn i tab1 
		this.#tbody = felt2.querySelector("tbody");
		
		const span = felt2.querySelector("legend span");
		span.textContent = new Date().getFullYear();
		
		felt1.querySelector("button").addEventListener(
			"click",
			() => { this.#registrervenn() }
		);
		
		
		// Legg inn evt. mere kode her
	}
	#registrervenn() {
		/* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
		som vises i Skjermbilde 2 */
		
		//lager variabler for å bruke de for validering
		const navn = this.#navnefelt.value.trim();
		const alder = parseInt(this.#alderfelt.value);/*gjør om til tall igjen. pga når vi henter verdien fra 
		et <input>-felt med:
		const alder = document.getElementById("alder").value;
		så får vi alltid en string, selv om type="number" i HTML		
		*/
		
		//validering
		if(!navn || isNaN(alder) || alder < 0 || alder > 110){ //NaN betyr "ikkje et nummer"
			alert("Skriv inn navn og alder mellom 0 og 110");//alert er hat metode å gjøre ting på
			return;
		}
		
		//legg venn i listen
		this.#venner.push({navn, alder});//legger de inn i venner listen
		this.#venner.sort((a,b) => a.alder - b.alder);//sorterer de etter yngst til eldst
		this.#oppdaterTabell();// vi må lage metoden som oppdatererTabellen
		
		this.#navnefelt.value = ""; //gjør inputen tom igjen. Altså denne boksen
		this.#alderfelt.value = ""; //gjør inputen tom igjen. Altså også denne boksen
				
		
	}
	
	
	#oppdaterTabell(){
		//Tøm tidligere tidligere innhold
		
		this.#tbody.innerHTML = "";
		
		// Lag en tabellrad for hver venn
		for (const venn of this.#venner){
			const  tr =document.createElement("tr");
			
			const tdAlder = document.createElement("td");
			tdAlder.textContent = venn.alder;
			
			const tdNavn = document.createElement("td");
			tdNavn.textContent = venn.navn;
						
			tr.appendChild(tdAlder);
			tr.appendChild(tdNavn);
			this.#tbody.appendChild(tr);
			
			
			
			
		}
		
	}
	
	
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);