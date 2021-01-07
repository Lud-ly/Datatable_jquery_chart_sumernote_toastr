<?php
//---------------------------------------------------------//
//                 AJOUT D'UN VEHICULE                     //
//---------------------------------------------------------//
//              Voir programme principale à la fin         //
//---------------------------------------------------------//

//---------------------------------------------------------//
//                        FUNCTIONS                        //
//---------------------------------------------------------//

// Vérifier les données du formulaire
require ('utils.php');


// Ajout d'une voiture au fichier txt
function addCarsToFile()	{
	$sContenu= file_get_contents("Cars.txt");
	$sContenu.= $_POST["annee"] . "||" . $_POST["marque"] . "||" . $_POST["modele"] . "||" . $_POST["motorisation"] . "||" . $_POST["cv"] . "||" . $_POST["circulation"] . "||" . $_POST["summernote"] . "\n";
	file_put_contents("Cars.txt", $sContenu);
}

//---------------------------------------------------------//
//                           MAIN                          //
//---------------------------------------------------------//

// Vérifier les données du formulaire
$error= checkFormulaire();
// SI formulaire OK, j'ajoute l'enregistrement
if($error == 0)	{
	addCarsToFile();
}


?>