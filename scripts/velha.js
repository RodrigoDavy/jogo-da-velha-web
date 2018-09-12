//Obtendo os elementos do DOM com que vamos interagir

const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo
const b_reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar
const label_jogador = document.getElementById('jogador'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

var jogador = '_'; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O) 

//Usa uma função que decide aleatoriamente o jogar a fazer a primeira jogada
var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "O";
		label_jogador.innerText="O";
		label_jogador.style.color='#F00';
	}else{
		jogador = "X";
		label_jogador.innerText="X";
		label_jogador.style.color='#00F';
	}
}

sortearJogador();

var vencedor = '_'; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O) 

//Alterna a vez entre os jogadores X e Y
var trocarJogador = function() {
	if(jogador=='X') {
		jogador='O';
		label_jogador.innerText='O';
		label_jogador.style.color='#F00';
		
	}else{
		jogador='X';
		label_jogador.innerText='X';
		label_jogador.style.color='#00F';
	}
}

//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
var vitoria = function() {
	if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[1].style.backgroundColor='#0F0';
		casas[2].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[3].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[7].style.backgroundColor='#0F0';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[5].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[2].value;
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[8].style.backgroundColor='#0F0';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#0F0';
		casas[4].style.backgroundColor='#0F0';
		casas[6].style.backgroundColor='#0F0';

		return casas[2].value;
	}

	return '_';
}

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
	casas[i].addEventListener('click', (event) => {
		if( (event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador;
			event.target.style.color='black';

			trocarJogador();

			vencedor = vitoria();

			if(vencedor!='_') {
				label_jogador.innerText=`${vencedor} venceu!`;
				
			}
		}
	});
}

//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		casas[i].value='_';
		casas[i].style.color='white';
		casas[i].style.backgroundColor='white';
	}

	vencedor = '_';

	sortearJogador();
});
