/**
 * @module quiz.js
 * @author Coéquipier1
 * @author Coéquipier2
 * @copyright 2018
 */

/**
 * @name validerQuestion
 * @description Valide si la réponse choisie est la bonne.
 * @param {*} noQuestion numéro de la question
 * @param {*} choixUtilisateur choix fait par l'utilisateur
 * @returns true si la réponse choisie est bonne, sinon false
 */
/*
function validerQuestion(noQuestionCourante, choixUtilisateur)
{
	if (choixUtilisateur == )
}
*/
/**
 * @name ajouterPoint
 * @description Ajoute un point au total des points.
 */

function ajouterPoint()
{
	document.getElementById("totalPoints").textContent = totalPointage + 1;
}

/**
 * @name obtenirPointage
 * @description Obtiens le pointage total accumulé.
 * @returns Le pointage total
 */
function obtenirPointage()
{
}

/**
 * @name estFinPartie
 * @description Vérifie si l'on a atteint la fin de la partie.
 * @param {*} questionCourante Index de la question courante
 * @returns true si l'index de la question courrante est égal au nombre maximum de questions, sinon faux
 */

function estFinPartie(questionCourante)
{
	console.log(finPartie)
	var finPartie = true;

	if (questionCourante < (MAX_QUESTIONS - 1))
	{
		finPartie = false;
	}
	return finPartie;	
}

/**
 * @name chargerQuestionSuivante
 * @description Incrémente l'index indiquant la question courante.
 */

function changeText()
{
	document.getElementById("texteQuestion").textContent = questionsQuiz[0][0];
}

function questionSuivante(estFinPartie)
{
	console.log(questionSuivante)
	if (questionCourante < (MAX_QUESTIONS - 1))
	{
		questionCourante ++;
		document.getElementById("texteQuestion").textContent = questionsQuiz[questionCourante][0];
		document.getElementById("noQuestionCourante").textContent = (questionCourante + 1);
	}
}

/**
 * @name obtenirBonneReponse
 * @description Incrémente l'index indiquant la question courante.
 * @param {*} noQuestion L'index de la question
 * @returns retourne la bonne réponse
 */

function obtenirBonneReponse(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name obtenirChoix
 * @description Obtiens les choix de réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut obtenir les choix de réponse.
 * @returns retourne un tableau contenant les choix de la question
 */

function obtenirChoix(noQuestion)
{
	document.getElementById("btnChoix1").textContent = questionsQuiz[0][3];
	document.getElementById("btnChoix2").textContent = questionsQuiz[0][4];
	document.getElementById("btnChoix3").textContent = questionsQuiz[0][5];
	document.getElementById("btnChoix4").textContent = questionsQuiz[0][6];
}

/**
 * @name afficherBonneReponse
 * @description Modifie la fenêtre modale pour afficher la bonne réponse pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher la bonne réponse.
 */

function afficherBonneReponse(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name majPointage
 * @description Mets à jour le total des points accumulés dans l'interface.
 */

function majPointage()
{
	//ajouter votre code ici
}

/**
 * @name majTotalQuestion
 * @description Mets à jour le nombre total de questions dans l'interface.
 */

/**
 * @name majTexteChoix
 * @description Modifie l'interface en affichant les réponses dans des boutons pour une question donnée.
 * @param {*} noQuestion Index de la question pour laquelle il faut afficher les réponses.
 */

function majTexteChoix(noQuestion)
{
	//ajouter votre code ici
}

/**
 * @name majTexteQuestion
 * @description Modifie l'interface en affichant une question.
 * @param {*} noQuestion Index de la question qu'il faut afficher.
 */

function majTexteQuestion(noQuestion)
{
	$('#texteQuestion').removeClass('animated bounceInLeft delay-1s');
	$('#texteQuestion').removeClass('animated wobble delay-2s');
	$('#texteQuestion').addClass('animated bounceInLeft delay-1s');
}

/**
 * @name majNoQuestionCourant
 * @description Modifie l'interface en affichant une le numéro de la question courante.
 */

function majNoQuestionCourant()
{		
}

/**
 * @name remiseAZeroBoutons
 * @description Modifie l'interface en remettant à l'état initial les boutons de réponse.
 */

function remiseAZeroBoutons()
{
	//ajouter votre code ici
}

/**
 * @name majProgression
 * @description Modifie l'interface en ajustant la barre de progression.
 */

function majProgression()
{
	//ajouter votre code ici
}

/**
 * @name majInterface
 * @description Modifie l'interface en changeant la question, les choix de réponses, en mettant à jour le pointage, la barre de progression et le numéro de la question courante et en remettant à zéro les boutons.
 */

function majInterface()
{
	//ajouter votre code ici
}

/**
 * @name selectionnerChoix
 * @description Modifie l'interface pour changer l'apparence du bouton cliqué et activer le bouton Valider.
 * @param {*} noChoix Numéro du choix de réponse sélectionné.
 */

function selectionnerChoix(noChoix)
{
	//ajouter votre code ici
}

/**
 * @name afficherBoiteFinDeJeu
 * @description Modifie l'interface pour afficher la boîte de résumé et cacher la boîte de question.
 */

function afficherBoiteFinDeJeu()
{
	//ajouter votre code ici
}
