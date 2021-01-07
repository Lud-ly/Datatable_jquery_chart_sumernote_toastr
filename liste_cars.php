<?php

//---------------------------------------------------------//
//                LISTING DES VEHICULES                    //
//---------------------------------------------------------//
//              Voir programme principale à la fin         //
//---------------------------------------------------------//

//---------------------------------------------------------//
//                        FUNCTIONS                        //
//---------------------------------------------------------//

// Get content of files and put in array aOfCars
function getContentFileIntoArray(){
	// init variables
	$aOfCars= [];
	$sContenu= file_get_contents("Cars.txt");
	$aOfContenu= explode("\n", $sContenu);
	for ($iLigne=0; $iLigne<(count($aOfContenu)-1); $iLigne++)  {
		list($aOfCars[$iLigne]["annee"], $aOfCars[$iLigne]["marque"], $aOfCars[$iLigne]["modele"], $aOfCars[$iLigne]["motorisation"], $aOfCars[$iLigne]["cv"], $aOfCars[$iLigne]["circulation"], $aOfCars[$iLigne]["summernote"])= explode("||", $aOfContenu[$iLigne]);
	}
	return $aOfCars;
}

//---------------------------------------------------------//
//                           MAIN                          //
//---------------------------------------------------------//
// Get content of files and put in array aOfCars
$aOfCars= getContentFileIntoArray();


?>
