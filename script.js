// Método Simples
document.body.innerHTML += `
    <h1 id="titulo">Terno - moda masculina</h1>
    <div id="produto">
        <h2>Produto: Tênis Adidas</h2>
        <p>Descrição: Tênis Adidas Park Street Masculino.</p>
        <p>Preço: R$ 379,90</p>
        <img src="1.png" alt="Tênis Adidas" width=150px>
    </div>
`;

// Método Complexo
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Terno - moda masculina';
document.body.appendChild(titulo);

const produtoDiv = document.createElement('div');
produtoDiv.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto: Camiseta';
produtoDiv.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição: Camiseta 100% algodão, confortável e estilosa.';
produtoDiv.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 49,90';
produtoDiv.appendChild(precoProduto);

const imagemProduto = document.createElement('img');
imagemProduto.src = '2.png';
imagemProduto.alt = 'Camiseta';
imagemProduto.width = 150;
produtoDiv.appendChild(imagemProduto);

document.body.appendChild(produtoDiv);