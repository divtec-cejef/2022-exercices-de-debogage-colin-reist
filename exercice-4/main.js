(function main() {
	let lancementOk = false;
	const niveauDeCarburant = 17000;

	if (niveauDeCarburant >= 20000) {
		console.log('Niveau de carburant vérifié.');
		lancementOk = true;
	} else {
		console.log('AVERTISSEMENT : Carburant insuffisant !');
		lancementOk = false;
	}
}()); // Main IIFE
