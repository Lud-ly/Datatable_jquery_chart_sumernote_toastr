
        $(document).ready(function(){
			var myMainHeight= 250;
			 var myMainWidth= "100%";
			// pour les param?res, voir summernote.js 
            $('.summernote').summernote({
                maxWidth: myMainWidth,
                maxHeight: myMainHeight,
                lang: "fr-FR",
                width: myMainWidth, 
                height: myMainHeight,
				toolbar: [
					['style', ['style', 'bold', 'italic', 'underline']],
					['font', ['strikethrough']],
					['style', ['clear']],
					['fontname', ['fontname']],
					['fontsize', ['fontsize']],
					['color', ['color']],
					['para', ['ul', 'ol', 'paragraph']],
					['height', ['height']], 
					['table', ['table']], 
					['link', ['link']], 
					['picture', ['picture']], 
					['video', ['video']], 
					['hr', ['hr']], 
					['codeview', ['codeview']], 
					['undo', ['undo']], 
					['redo', ['redo']]
				], 
				fontNames: [
					'Arial', 'Arial Black', 'Verdana'
				]
			});
			
			// fonction qui remplit le summernote
		//	inf_constructHTML();
			//$('#summernote').summernote("code", "Coucou<br>C'est LULU");
    });