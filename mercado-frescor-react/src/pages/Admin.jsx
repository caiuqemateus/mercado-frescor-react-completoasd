import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { useAuth } from '../context/AuthContext';

const Admin = ({ onShowToast }) => {
  const { produtos, adicionarProduto, editarProduto, removerProduto } = useProducts();
  const { isAdmin } = useAuth();
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    imagem: ''
  });

  // Verificar se o usuário é admin
  if (!isAdmin()) {
    return (
      <section id="admin" className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-800">Acesso Negado</h2>
          <p className="text-red-600">Você precisa ser um administrador para acessar esta página.</p>
        </div>
      </section>
    );
  }

  const abrirModal = (produto = null) => {
    if (produto) {
      setProdutoEditando(produto);
      setFormData({
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco.toString(),
        imagem: produto.imagem
      });
    } else {
      setProdutoEditando(null);
      setFormData({
        nome: '',
        descricao: '',
        preco: '',
        imagem: ''
      });
    }
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoEditando(null);
    setFormData({
      nome: '',
      descricao: '',
      preco: '',
      imagem: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.descricao || !formData.preco || !formData.imagem) {
      onShowToast('Por favor, preencha todos os campos!');
      return;
    }

    const produtoData = {
      nome: formData.nome,
      descricao: formData.descricao,
      preco: parseFloat(formData.preco),
      imagem: formData.imagem
    };

    if (produtoEditando) {
      editarProduto(produtoEditando.id, produtoData);
      onShowToast('Produto editado com sucesso!');
    } else {
      adicionarProduto(produtoData);
      onShowToast('Produto adicionado com sucesso!');
    }

    fecharModal();
  };

  const handleRemover = (produto) => {
    if (window.confirm(`Tem certeza que deseja remover o produto "${produto.nome}"?`)) {
      removerProduto(produto.id);
      onShowToast('Produto removido com sucesso!');
    }
  };

  return (
    <section id="admin" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Painel Administrativo</h2>
          <button
            onClick={() => abrirModal()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            <i className="fas fa-plus mr-2"></i>
            Adicionar Produto
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={produto.imagem}
                          alt={produto.nome}
                          className="h-10 w-10 rounded-full object-cover mr-4"
                        />
                        <div className="text-sm font-medium text-gray-900">
                          {produto.nome}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{produto.descricao}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">R$ {produto.preco.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => abrirModal(produto)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => handleRemover(produto)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Adicionar/Editar Produto */}
        {modalAberto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {produtoEditando ? 'Editar Produto' : 'Adicionar Produto'}
                </h3>
                <button
                  onClick={fecharModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nome do produto"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="descricao" className="block text-gray-700 mb-2">Descrição</label>
                  <input
                    type="text"
                    id="descricao"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Descrição do produto"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="preco" className="block text-gray-700 mb-2">Preço</label>
                  <input
                    type="number"
                    id="preco"
                    name="preco"
                    value={formData.preco}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="0.00"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="imagem" className="block text-gray-700 mb-2">URL da Imagem</label>
                  <input
                    type="url"
                    id="imagem"
                    name="imagem"
                    value={formData.imagem}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={fecharModal}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    {produtoEditando ? 'Salvar' : 'Adicionar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;

