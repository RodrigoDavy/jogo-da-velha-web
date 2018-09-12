const lista = document.getElementsByTagName('input');
const b_reiniciar = document.getElementById('reiniciar');
const label_jogador = document.getElementById('jogador');

var jogador = '';

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

var vencedor = '';

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

var vitoria = function() {
	if((lista[0].value==lista[1].value) && (lista[1].value==lista[2].value) && lista[0].value!='' ) {
		lista[0].style.backgroundColor='#0F0';
		lista[1].style.backgroundColor='#0F0';
		lista[2].style.backgroundColor='#0F0';

		return lista[0].value;
	}else if((lista[3].value==lista[4].value) && (lista[4].value==lista[5].value) && lista[3].value!='' ) {
		lista[3].style.backgroundColor='#0F0';
		lista[4].style.backgroundColor='#0F0';
		lista[5].style.backgroundColor='#0F0';

		return lista[3].value;
	}else if((lista[6].value==lista[7].value) && (lista[7].value==lista[8].value) && lista[6].value!='' ) {
		lista[6].style.backgroundColor='#0F0';
		lista[7].style.backgroundColor='#0F0';
		lista[8].style.backgroundColor='#0F0';

		return lista[6].value;

	}else if((lista[0].value==lista[3].value) && (lista[3].value==lista[6].value) && lista[0].value!='' ) {
		lista[0].style.backgroundColor='#0F0';
		lista[3].style.backgroundColor='#0F0';
		lista[6].style.backgroundColor='#0F0';

		return lista[0].value;
	}else if((lista[1].value==lista[4].value) && (lista[4].value==lista[7].value) && lista[1].value!='' ) {
		lista[1].style.backgroundColor='#0F0';
		lista[4].style.backgroundColor='#0F0';
		lista[7].style.backgroundColor='#0F0';

		return lista[1].value;
	}else if((lista[2].value==lista[5].value) && (lista[5].value==lista[8].value) && lista[2].value!='' ) {
		lista[2].style.backgroundColor='#0F0';
		lista[5].style.backgroundColor='#0F0';
		lista[8].style.backgroundColor='#0F0';

		return lista[2].value;
	}else if((lista[0].value==lista[4].value) && (lista[4].value==lista[8].value) && lista[0].value!='' ) {
		lista[0].style.backgroundColor='#0F0';
		lista[4].style.backgroundColor='#0F0';
		lista[8].style.backgroundColor='#0F0';

		return lista[0].value;
	}else if((lista[2].value==lista[4].value) && (lista[4].value==lista[6].value) && lista[2].value!='' ) {
		lista[2].style.backgroundColor='#0F0';
		lista[4].style.backgroundColor='#0F0';
		lista[6].style.backgroundColor='#0F0';

		return lista[2].value;
	}

	return '';
}

for(var i=0;i<9;i++) {
	lista[i].addEventListener('click', (event) => {
		if( (event.target.value=='') && (vencedor=='')) {
			event.target.value=jogador;

			trocarJogador();

			vencedor = vitoria();

			if(vencedor!='') {
				alert('O jogador '+ vencedor + ' venceu!!!');
			}
		}
	});
}

b_reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		lista[i].value='';
		lista[i].style.backgroundColor='white';
	}

	vencedor = '';

	sortearJogador();
});
