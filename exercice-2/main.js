(function main() {
	var lancementOk = false;
	var niveauDeCarburant = 17000;

	if (niveauDeCarburant >= 20000) {
		console.log('Niveau de carburant vérifié.');
		lancementOk = true;
	} else {
		console.log('AVERTISSEMENT : Carburant insuffisant !');
		lancementOk = false;
	}
}()); // Main IIFE
