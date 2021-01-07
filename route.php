<?php

	$page= $_POST["page"];
	
	// appel du programme principal
	require $page . ".php";
	
	// Envoi de la vue
	require $page . ".html";
	

?>
