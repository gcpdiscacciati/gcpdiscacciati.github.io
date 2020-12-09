//Javascript para Entrega 3 do Trabalho Prático de Desenvolvimento de Páginas Web

//Imprime mensagens na tela
console.log('Olá, esta página emitirá um alerta ao ser carregada.');

console.log('Dados do autor do site:');
var dados = {'nome': 'Giovanne Discacciati', 'turma': 'Desenvolvimento de Páginas Web', 'instituicao': 'IF SUDESTE MG', 'campus': 'Barbacena'};
console.log(dados);

//Identifica se o usuário está na página inicial pelo título
if (document.title == "What's Your Game?") {
	alert("Olá, seja bem-vindo ao What's Your Game!");
	console.log(document.title) //Imprime o título no console
	console.log('Abaixo, o título da página será trocado e impresso na tela novamente:');
	document.title = "What's Your Game? - Em construção"; //Altera dinamicamente o título da página
	console.log(document.title);
	
	var titulo = document.querySelector('h1#primeiro');
	titulo.style.cursor = 'pointer'; //Altera o estilo de cursor, para indicar ao usuário que o item é clicável
	
	//Função que altera o "h1" ao ser clicado
	titulo.onclick = function(){
		if (titulo.textContent == 'Games') {
			titulo.textContent = 'Jogos em Geral...';
		}
		else{
			if (titulo.textContent == 'Jogos em Geral...') {
				titulo.textContent = 'Videogames...';
			}
			else{
				if (titulo.textContent == 'Videogames...') {
					titulo.textContent = 'Jogos de Tabuleiro...';
				}
				else{
					if (titulo.textContent == 'Jogos de Tabuleiro...') {
						titulo.textContent = 'Card Games...';
					}
					else{
						if (titulo.textContent == 'Card Games...') {
							titulo.textContent = 'E mais...';
						}
						else{
							if (titulo.textContent == 'E mais...') {
								titulo.textContent = 'Games';
							}
						}
					}

				}	
			}
		}
	}
}

//Seleciona um elemento pelo seu "id" e imprime no console
var copy = document.getElementById('copyright');
console.log('Usando o "getElementById" para mostrar o conteúdo da tag com id "copyright":');
console.log(copy.textContent);

//Seleciona os elementos por sua classe e mostra o conteúdo no console
var classe_nivel2 = document.getElementsByClassName('nivel2');
console.log('Abaixo será mostrado o conteúdo das tags com classe "nivel2":');
for (var i = 0; i < classe_nivel2.length; i++){
	console.log(classe_nivel2[i].textContent);
}

//Seleciona os elementos pelo nome da Tag e imprime no console
var li = document.getElementsByTagName('li');
console.log('Abaixo será mostrado o HTML das tags com nome "li":');
for (var i = 0; i < li.length; i++) {
	console.log(li[i]);
}

//Seleciona o elemento usando a sintaxe de seleção do CSS
var cor_fundo = document.querySelector('div#alterna_modo > label');
cor_fundo.style.cursor = 'pointer'; //Muda o estilo do cursor

//Função que alterna a cor de fundo entre "Modo Claro" e "Modo Escuro"
cor_fundo.onclick = function(){
	var body = document.body;
	
	if (cor_fundo.textContent == 'Modo Claro') {
		body.style.backgroundColor = '#888';
		cor_fundo.innerHTML = '<i class="fas fa-adjust"></i>Modo Escuro';
	}
	else{
		body.style.backgroundColor = '#444';
		cor_fundo.innerHTML = '<i class="fas fa-adjust"></i>Modo Claro';
	}
	//Foi usado o innerHTML para alterar dinamicamente o HTML do elemento
}


//Identifica se o usuário está na página "contato.html"
if (document.title == "Contato - What's Your Game") {
	cor_fundo.style.marginTop = '50px'; //Altera o CSS do elemento para posicioná-lo melhor em tela
	var botao_limpar = document.querySelector('#limpar');
	botao_limpar.style.cursor = 'pointer';

	//Função que limpa o conteúdo do formulário ao clicar no botão
	botao_limpar.onclick = function(){
		var form = document.querySelectorAll('.frm_resp'); //Seleciona todos os elementos de uma classe usando sintaxe do CSS
		for (var i = 0; i < form.length; i++) { //Percorre todos os elementos selecionados
			
			if (form[i].type == 'text' || form[i].tagName == 'TEXTAREA'){
				form[i].value = ''; //Limpa os campos de texto
			}
			else{
				if (form[i].type == 'radio' || form[i].type == 'checkbox') {
					form[i].checked = false; //Limpa os campos do tipo "radio" e "checkbox"
				}
					
			}
		}
		
	}

	var botao_enviar = document.querySelector('#botao');
	botao_enviar.style.cursor = 'pointer';

	//Função que valida o formulário, checando se os campos de texto foram preenchidos
	botao_enviar.onclick = function(){
		var x = document.forms['form1']['email'].value;
		if (x == '') {
			alert('Campo "E-mail" Obrigatório!');
		}

		var y = document.forms['form1']['frm_fav'].value;
		if (y == '') {
			alert('Campo "Mensagem" Obrigatório!');
		}

		if(x != '' && y != ''){
			alert('Mensagem enviada com sucesso!');	
		}
		
	}
}


