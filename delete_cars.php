<?php
//---------------------------------------------------------//
//                 SUPPRESSION D'UN VEHICULE               //
//---------------------------------------------------------//
//              Voir programme principale à la fin         //
//---------------------------------------------------------//

//---------------------------------------------------------//
//                        FUNCTIONS                        //
//---------------------------------------------------------//

//Supprimer une voiture dans le fichier txt
function deleteCarsToFile(){

     //Ouvrir le fichier	
     $sContenu= file_get_contents("Cars.txt");	
    
    //Récuperer la ligne a supprimer
    //Supprimer la ligne str_replace par String vide""
    $sContenu= str_replace($_POST["sLigneDelete"],"", $sContenu);
    file_put_contents("Cars.txt", $sContenu);
}

//---------------------------------------------------------//
//                           MAIN                          //
//---------------------------------------------------------//
// supprimer un enregistrement
deleteCarsToFile();


?>