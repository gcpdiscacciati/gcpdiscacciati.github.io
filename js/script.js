console.log("Olá, esta página emitirá um alerta ao ser carregada.");
if (document.title == "What's Your Game?") {
	alert("Olá, seja bem-vindo ao What's Your Game!");
	console.log(document.title)
	document.title = "What's Your Game? - Em construção";
	console.log(document.title);
	var titulo = document.querySelector("h1#primeiro");
	titulo.style.cursor = "pointer";
	titulo.onclick = function(){
		if (titulo.textContent == "Games") {
			titulo.textContent = "Jogos em Geral...";
		}
		else{
			if (titulo.textContent == "Jogos em Geral...") {
				titulo.textContent = "Videogames...";
			}
			else{
				if (titulo.textContent == "Videogames...") {
					titulo.textContent = "Jogos de Tabuleiro...";
				}
				else{
					if (titulo.textContent == "Jogos de Tabuleiro...") {
						titulo.textContent = "Card Games...";
					}
					else{
						if (titulo.textContent == "Card Games...") {
							titulo.textContent = "E mais...";
						}
						else{
							if (titulo.textContent == "E mais...") {
								titulo.textContent = "Games";
							}
						}
					}

				}	
			}
		}
	}
}

var copy = document.getElementById('copyright');
console.log(copy.textContent);

var classe_nivel2 = document.getElementsByClassName('nivel2');
for (var i = 0; i < classe_nivel2.length; i++){
	console.log(classe_nivel2[i].textContent);
}

var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
	console.log(li[i]);
}

var cor_fundo = document.querySelector('div#alterna_modo > label');
cor_fundo.style.cursor = 'pointer';

cor_fundo.onclick = function(){
	var body = document.body;
	
	if (cor_fundo.textContent == "Modo Claro") {
		body.style.backgroundColor = '#888';
		cor_fundo.innerHTML = '<i class="fas fa-adjust"></i>Modo Escuro';
		
	}
	else{
		body.style.backgroundColor = '#444';
		cor_fundo.innerHTML = '<i class="fas fa-adjust"></i>Modo Claro';
	}

}

if (document.title == "Contato - What's Your Game") {
	cor_fundo.style.marginTop = "50px";
	var botao_limpar = document.querySelector("#limpar");
	botao_limpar.style.cursor = "pointer";
	botao_limpar.onclick = function(){
		var form = document.querySelectorAll(".frm_resp");
		for (var i = 0; i < form.length; i++) {
			
			if (form[i].type == "text" || form[i].tagName == "TEXTAREA"){
				form[i].value = "";
			}
			else{
				if (form[i].type == "radio" || form[i].type == "checkbox") {
					form[i].checked = false;
				}
					
			}
		}
		
	}
	var botao_enviar = document.querySelector('#botao');
	botao_enviar.style.cursor = "pointer";
	botao_enviar.onclick = function(){
		var x = document.forms["form1"]["email"].value;
		if (x == "") {
			alert("Campo 'E-mail' Obrigatório!");
		}

		var y = document.forms["form1"]["frm_fav"].value;
		if (y == "") {
			alert("Campo 'Mensagem' Obrigatório!");
		}

		if(x != "" && y != ""){
			alert("Dados enviados com sucesso!");	
		}
		
	}
}


