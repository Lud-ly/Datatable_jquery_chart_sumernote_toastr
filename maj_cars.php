<?php
//---------------------------------------------------------//
//                 MODIFICATION D'UN VEHICULE                     //
//---------------------------------------------------------//
//              Voir programme principale à la fin         //
//---------------------------------------------------------//

//---------------------------------------------------------//
//                        FUNCTIONS                        //
//---------------------------------------------------------//

// Vérifier les données du formulaire
require ('utils.php');

//Modifification d'une voiture dans le fichier txt
function updateCarsToFile(){
  
    //Ouvrir le fichier	
    $sContenu= file_get_contents("Cars.txt");
    // crée la nouvelle ligne
    $sNewLine= $_POST["annee"] . "||" . $_POST["marque"] . "||" . $_POST["modele"] . "||" . $_POST["motorisation"] . "||" . $_POST["cv"] . "||" . $_POST["circulation"] . "||" . $_POST["summernote"] . "\n";
    //Récuperer valeur de oldline en POST
    //Remplace oldline contenu par nouvelle ligne
    $sContenu= str_replace($_POST["sOldLine"], $sNewLine, $sContenu);
    //Ecrire le nouveau contenu
    file_put_contents("Cars.txt", $sContenu);
}

//---------------------------------------------------------//
//                           MAIN                          //
//---------------------------------------------------------//

// Vérifier les données du formulaire
$error= checkFormulaire();
// SI formulaire OK, j'ajoute l'enregistrement au fichier txt
if($error == 0)	{
	updateCarsToFile();
}


?>