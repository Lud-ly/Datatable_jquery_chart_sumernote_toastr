<?php

// Vérifier les données du formulaire
function checkFormulaire()	{
	// Initialisation des variables
	$error= 0;
	if ((!(isset($_POST["annee"]))) || ($_POST["annee"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["marque"]))) || ($_POST["marque"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["modele"]))) || ($_POST["modele"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["motorisation"]))) || ($_POST["motorisation"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["cv"]))) || ($_POST["cv"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["circulation"]))) || ($_POST["circulation"] == ""))	{
		$error++;
	}
	if ((!(isset($_POST["summernote"]))) || ($_POST["summernote"] == ""))	{
		$error++;
	}
	return $error;
}
?>