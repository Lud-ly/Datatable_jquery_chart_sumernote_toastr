var aOfCars = [];

/**
 * Get Cars from Cars.txt
 *
 * if OK add cars to array aOfCars
 *
 * if OK then build table and call datatable
 */
function loadCars() {
    $('#divModalSaving').show();
    var datas = {
		page: "liste_cars"
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            var iCar = 0;
            for (var ligne in result) {
                aOfCars[iCar] = [];
                aOfCars[iCar]["annee"] = result[ligne]["annee"];
                aOfCars[iCar]["marque"] = result[ligne]["marque"];
                aOfCars[iCar]["modele"] = result[ligne]["modele"];
                aOfCars[iCar]["motorisation"] = result[ligne]["motorisation"];
                aOfCars[iCar]["cv"] = result[ligne]["cv"];
                aOfCars[iCar]["circulation"] = result[ligne]["circulation"];
                aOfCars[iCar]["summernote"] = result[ligne]["summernote"];
                iCar++;
            }
            constructTable();
            // INIT DATATABLE
            tables = $('#table_cars').DataTable(configuration);
            // Hide div saving
            $('#divModalSaving').hide();
        })
        .fail(function (err) {
            alert('error : ' + err.status);
            $('#divModalSaving').hide();
        });
}



function constructTable() {
    var i;

    var sHTML = "";
    sHTML += "<thead>";
    sHTML += "<tr>";
    sHTML += "<td>Année</td>";
    sHTML += "<td>Marque</td>";
    sHTML += "<td>Modèle</td>";
    sHTML += "<td>Editer</td>";
    sHTML += "<td><img src='./img/trash1.png'></td>";
    sHTML += "</tr>";
    sHTML += "</thead>";
    sHTML += "<tbody>";

    for (i = 0; i < aOfCars.length; i++) {
        sHTML += "<tr>";
        sHTML += "<td>" + aOfCars[i]["annee"] + "</td>";
        sHTML += "<td>" + aOfCars[i]["marque"] + "</td>";
        sHTML += "<td>" + aOfCars[i]["modele"] + "</td>";
        sHTML += "<td class='icon' onClick=\"editcar(" + i + ")\"><img src='./img/edit_pencil.png'></td>";
        sHTML += "<td  class='icon' onClick=\"deleteCar(" + i + ") \"><img src='./img/trash.png'></td>";
        sHTML += "</tr>";
    }

    sHTML += "</tbody>";
    $('#table_cars').html(sHTML);
}


/**
 
 * Check formulaire
 */
function checkForm()    {
    // Liste des champs obligatoires
    var aOfFields= ["annee", "marque", "modele", "motorisation", "cv", "circulation", "summernote"];
    var error_form= 0;

    // Avant je re initialise les champs de rouge à normal
    for (var iField=0; iField < aOfFields.length; iField++)    {
        $('#'+aOfFields[iField]).css("border", "1px solid black");
        $('#p_'+aOfFields[iField]+'error').remove();
    }

    // Je boucle sur les champs et teste si c'est vide
    for (var iField=0; iField < aOfFields.length; iField++)    {
        if ($('#'+aOfFields[iField]).val() == "")    {
            error_form= 1;
            $('#'+aOfFields[iField]).css("border", "2px solid red");
            $('#'+aOfFields[iField]).parent().before("<p id='p" + aOfFields[iField] + "_error' style='color: red'>Erreur " + aOfFields[iField] + " ne peut être vide" +"</p>");
           // $('#'+aOfFields[iField]).parent().before("<p id='p" + aOfFields[iField] + "_error' style='color: red'>Erreur " + aOfFields[iField] + " ne peut être vide" +"</p>");
        }
    }
    return error_form;
}

function addCar_server() {
    var error_form= checkForm();
    if (error_form == 1)   {
        return;
    }
     $('#divModalSaving').show();
    var datas = {
		page: "add_cars", 
        annee: $('#annee').val(),
        marque: $('#marque').val(),
        modele: $('#modele').val(),
        motorisation: $('#motorisation').val(),
        cv: $('#cv').val(),
        circulation: $('#circulation').val(),
        summernote:$('#summernote').val()
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            if (result[0]["error"]==0) { 
                addCar();
                $("#div_resultat").html("Voiture ajoutée");
                $("#div_resultat").fadeOut(1500);
            }
            // Hide div saving
            $('#divModalSaving').hide();
        })
        .fail(function (err) {
            alert('error : ' + err.status);
            $('#divModalSaving').hide();
        });
}

function majCar_server() {
    var error_form= checkForm();
    if (error_form == 1)   {
        return;
    }
     $('#divModalSaving').show();
    var datas = {
		page: "maj_cars", 
        annee: $('#annee').val(),
        marque: $('#marque').val(),
        modele: $('#modele').val(),
        motorisation: $('#motorisation').val(),
        cv: $('#cv').val(), 
        circulation: $('#circulation').val(), 
        summernote:  $('#summernote').val(),
        sOldLine: sLigneEditEnCours
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        .done(function (result) {
            if (result[0]["error"]==0) { 
                majCar();
                $("#div_maj").html("Voiture modifiée");
                $("#div_maj").fadeOut(1500);
            }
            // Hide div saving
            $('#divModalSaving').hide();
        })
        .fail(function (err) {
            alert('error : ' + err.status);
            $('#divModalSaving').hide();
        });
}

//Ajouter voiture datatable
function addCar() {
    // Longueur actuel du tableau JS :
    var iLongueur = aOfCars.length;

    // ajout une voiture en fin de tableau JS
    aOfCars[iLongueur] = [];
    aOfCars[iLongueur]["annee"] = $('#annee').val();
    aOfCars[iLongueur]["marque"] = $('#marque').val();
    aOfCars[iLongueur]["modele"] = $('#modele').val();
    aOfCars[iLongueur]["motorisation"] = $('#motorisation').val();
    aOfCars[iLongueur]["cv"] = $('#cv').val();
    aOfCars[iLongueur]["circulation"] = $('#circulation').val();
    aOfCars[iLongueur]["summernote"] = $('#summernote').val();
    // Reconstruire le tableau HTML
    rebuildDatable();

    // Vider le formulaire
    clearForm();
}

//Reconstruire la datatable
function rebuildDatable() {
    $('#table_cars').html("");
    tables.clear();
    tables.destroy();
    constructTable();
    tables = $('#table_cars').DataTable(configuration);
}
//Fonction Vider le formulaire
function clearForm() {
    $("input").val(" ");
}

 // Fonction Modifier les éléments du tableau dont l'indice est iIndiceEditEnCours
function majCar() {
    // ajout la modif à l'indice iIndiceEditEnCours
    aOfCars[iIndiceEditEnCours]["annee"] = $('#annee').val();
    aOfCars[iIndiceEditEnCours]["marque"] = $('#marque').val();
    aOfCars[iIndiceEditEnCours]["modele"] = $('#modele').val();
    aOfCars[iIndiceEditEnCours]["motorisation"] = $('#motorisation').val();
    aOfCars[iIndiceEditEnCours]["cv"] = $('#cv').val();
    aOfCars[iIndiceEditEnCours]["circulation"] = $('#circulation').val();
    aOfCars[iIndiceEditEnCours]["summernote"] = $('#summernote').summernote("code", aOfCars[iIndiceEditEnCours]["summernote"]);
  
    // Reconstruire le tableau HTML
    rebuildDatable();
    // Vider le formulaire
    clearForm();
    // Remettre mes boutons correctement
    // Montrer le bouton ajouter
    $(".btn_action").show();
    // Cacher le bouton modifier
    $(".btn_modif").removeClass('show');
    // Cacher le bouton annuler
    $(".btn_save").removeClass('show');
}

var sLigneDeleteEnCours;
var iIndiceDeleteEnCours;
// Fonction Supprimer les éléments du tableau dont l'indice est iIndiceEditEnCours

function deleteCar_server(iIndiceDelete) {
    iIndiceDeleteEnCours=iIndiceDelete;
    sLigneDeleteEnCours= aOfCars[iIndiceDeleteEnCours]["annee"] + "||" +  aOfCars[iIndiceDeleteEnCours]["marque"] + "||" + aOfCars[iIndiceDeleteEnCours]["modele"] + "||" + aOfCars[iIndiceDeleteEnCours]["motorisation"] + "||" +  aOfCars[iIndiceDeleteEnCours]["cv"] + "||" +  aOfCars[iIndiceDeleteEnCours]["circulation"]+ "||" +  aOfCars[iIndiceDeleteEnCours]["summernote"] + "\n";
    //appel ajax vers php
    
    $('#divModalSaving').show();
    var datas = { 
		page: "delete_cars", 
        sLigneDelete: sLigneDeleteEnCours
    }
    $.ajax({
        type: "POST",
        url: "route.php",
        async: true,
        data: datas,
        dataType: "json",
        cache: false,
    })
        // Au retour server mettre dans le .done :
        .done(function (result) {
            if (result) { 
                $("#div_delete").html("Voiture Supprimer");
                $("#div_delete").fadeOut(1500);
            }
            // Hide div saving
            $('#divModalSaving').hide();
        })
        .fail(function (err) {
            alert('error : ' + err.status);
            $('#divModalSaving').hide();
        });
    
        
    
}

function deleteCar(iIndiceDelete) {
    var result=confirm("Voulez vous vraiment supprimez " + aOfCars[iIndiceDelete]["marque"] + " " + aOfCars[iIndiceDelete]["modele"] + " ?");
    if (!result)   {
        return;
    }
    deleteCar_server(iIndiceDelete);
    aOfCars.splice(iIndiceDelete, 1);
     // Reconstruire le tableau HTML
    rebuildDatable();
}

//Annuler modif voiture
function annulCar() {
    clearForm();
    // Reconstruire le tableau HTML
    rebuildDatable();

    // Remettre mes boutons correctement
    // Montrer le bouton ajouter
    $(".btn_action").show();
    // Cacher le bouton modifier
    $(".btn_modif").removeClass("show");
    // Cacher le bouton annuler
    $(".btn_save").removeClass("show");
}

var iIndiceEditEnCours;
var sLigneEditEnCours;
//Modifier voiture a iIndiceEditEnCours
function editcar(iIndiceEdit) {
    confirm("Modifier " + aOfCars[iIndiceEdit]["marque"] + " " + aOfCars[iIndiceEdit]["modele"] + " ?");
    iIndiceEditEnCours = iIndiceEdit;
    sLigneEditEnCours= aOfCars[iIndiceEdit]["annee"] + "||" +  aOfCars[iIndiceEdit]["marque"] + "||" + aOfCars[iIndiceEdit]["modele"] + "||" + aOfCars[iIndiceEdit]["motorisation"] + "||" +  aOfCars[iIndiceEdit]["cv"]  + "||" + aOfCars[iIndiceEdit]["circulation"]  + "||" + aOfCars[iIndiceEdit]["summernote"] + "\n";
    // J'édite la voiture en question
    $('#annee').val(aOfCars[iIndiceEdit]["annee"]);
    $('#marque').val(aOfCars[iIndiceEdit]["marque"]);
    $('#modele').val(aOfCars[iIndiceEdit]["modele"]);
    $('#motorisation').val(aOfCars[iIndiceEdit]["motorisation"]);
    $('#cv').val(aOfCars[iIndiceEdit]["cv"]);
    $('#circulation').val(aOfCars[iIndiceEdit]["circulation"]);
    $('#summernote').summernote("code", aOfCars[iIndiceEdit]["summernote"]);

    // cacher le bouton ajouter
    $(".btn_action").hide();
    // Montrer le bouton modifier
    $(".btn_modif").addClass("show");
    // Montrer le bouton annuler
    $(".btn_save").addClass("show");
}

// CONFIGURATION DATATABLE
const configuration = {
    "stateSave": false,
    "responsive":true,
    "order": [[1, "asc"]],
    "pagingType": "simple_numbers",
    "searching": true,
    "lengthMenu": [[10, 25, 50, 100, -1], ["Dix", "Vingt cinq", "Cinquante", "Cent", "Ze total stp"]],
    "language": {
        "info": "Véhicules _START_ à _END_ sur _TOTAL_ sélectionnés",
        "emptyTable": "Aucun véhicule",
        "lengthMenu": "_MENU_ Véhicules par page",
        "search": "Rechercher : ",
        "zeroRecords": "Aucun résultat de recherche",
        "paginate": {
            "previous": "Précédent",
            "next": "Suivant"
        },
        "sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        "sInfoEmpty": "Voitures 0 à 0 sur 0 sélectionné",
    },
    "columns": [
        {
            "orderable": true
        },
        {
            "orderable": true
        },
        {
            "orderable": true
        },
        {
            "orderable": false
        },
        {
            "orderable": false
        }
    ],
    'retrieve': true
};



var tables;
$(document).ready(function () {
    loadCars();
});