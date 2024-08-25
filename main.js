//* Função para pegar as categorias
async function buscarCategorias() {
	const url = `https://api.chucknorris.io/jokes/categories`;

	try {
		const resposta = await fetch(url);
		const categorias = await resposta.json();

		const select = document.getElementById('selecao');

		for (let i = 0; i < categorias.length; i++) {
			const categoria = categorias[i];
			const option = document.createElement('option');
			option.value = categoria;
			option.textContent = categoria;
			select.appendChild(option);
		}
	} catch (error) {
		throw new Error('Algo deu errado ao buscar as categorias', error);
	}
}

//* Função para buscar o Fato (frase aleatória)
async function buscarFato(categoria) {
	const urlCategoria = `https://api.chucknorris.io/jokes/random?category=${categoria}`;
	const urlRandom = `https://api.chucknorris.io/jokes/random`;

	const url = categoria ? urlCategoria : urlRandom;
	const resposta = await fetch(url);
	const dados = await resposta.json();
	return dados.value;
}

//* Adicionar um evento no botão - Fatos -
const botao = document.getElementById('btn');
const select = document.getElementById('selecao');

botao.addEventListener('click', async () => {
	const categoriaSelecionada = select.value;
	const fato = await buscarFato(categoriaSelecionada);
	document.getElementById('fato').textContent = fato;
});

buscarCategorias();
