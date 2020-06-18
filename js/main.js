$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides-portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,
 });

Visibility.onVisible(function() {
	setTimeout(function() {
		$(".introducao h1, .introducao-interna-portifolio h1, .introducao-interna-sobre h1, .introducao-interna-contato h1, .introducao-interna-produtos h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function() {
		$(".introducao blockquote, .introducao-interna-portifolio p, .introducao-interna-sobre p, .introducao-interna-contato p, .introducao-interna-produtos p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function() {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function() {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);
	setTimeout(function() {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);
});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "contato@apoderosasm.com.br"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});