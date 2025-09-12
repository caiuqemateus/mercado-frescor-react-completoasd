// Definições de tipos para o projeto Mercado Frescor

// Tipo para produtos
export const ProductType = {
  id: 'string',
  nome: 'string',
  descricao: 'string',
  preco: 'number',
  imagem: 'string'
};

// Tipo para itens do carrinho
export const CartItemType = {
  nome: 'string',
  preco: 'number',
  quantidade: 'number'
};

// Tipo para usuários
export const UserType = {
  id: 'string',
  nome: 'string',
  email: 'string',
  tipo: 'string' // 'cliente' ou 'admin'
};

// Dados iniciais dos produtos
export const initialProducts = [
  {
    id: '1',
    nome: 'Tomate',
    descricao: 'Tomate fresco e saboroso',
    preco: 5.00,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDEwt9epgsbNR_1iE6MWyzo9wBhv1J1gwxw&s'
  },
  {
    id: '2',
    nome: 'Cenoura',
    descricao: 'Cenoura crocante e nutritiva',
    preco: 20.00,
    imagem: 'https://www.infoescola.com/wp-content/uploads/2010/08/cenoura_250834906.jpg'
  },
  {
    id: '3',
    nome: 'Melancia',
    descricao: 'Melancia doce e refrescante',
    preco: 10.00,
    imagem: 'https://phygital-files.mercafacil.com/paxaemcasa/uploads/produto/melancia_kg_d3ed9733-5613-4f6a-8e53-70f9e5136b9b.jpg'
  },
  {
    id: '4',
    nome: 'Milho',
    descricao: 'Milho doce e saboroso',
    preco: 30.00,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfj5ZFGBAtlLIIrT2brE1jRU8jfIVvcAg8A&s'
  },
  {
    id: '5',
    nome: 'Pepino',
    descricao: 'Pepino fresco para saladas',
    preco: 3.00,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcS46cboixle_fz6vy8E-N9dsfUSu9UNEccQ&s'
  },
  {
    id: '6',
    nome: 'Manga',
    descricao: 'Manga doce e suculenta',
    preco: 30.00,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOifwsei75e4ipgUScf948luQaW9SLe1lvzg5iH1lkqHi_POZLOCEE_pzjiJE-ooPwTx4&usqp=CAU'
  },
  {
    id: '7',
    nome: 'Uva',
    descricao: 'Uva doce e saborosa',
    preco: 30.00,
    imagem: 'https://cdn.awsli.com.br/800x800/18/18885/produto/1972412/2699f58775.jpg'
  },
  {
    id: '8',
    nome: 'Batata',
    descricao: 'Batata ideal para frituras',
    preco: 3.00,
    imagem: 'https://ceagesp.gov.br/wp-content/uploads/2016/10/batataportal-412x322.jpg'
  },
  {
    id: '9',
    nome: 'Banana',
    descricao: 'Banana madura e doce',
    preco: 6.00,
    imagem: 'https://img.freepik.com/fotos-premium/bananas-isoladas-no-fundo-branco_252965-183.jpg'
  },
  {
    id: '10',
    nome: 'Abacaxi roxo',
    descricao: 'Abacaxi exótico e saboroso',
    preco: 7.00,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6gJjbQx4gDm8b32WfihrpkAhBkjN3WKqlg&s'
  }
];

