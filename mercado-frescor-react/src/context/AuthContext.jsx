import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Usuários simulados para demonstração
const usuariosSimulados = [
  {
    id: '1',
    nome: 'Cliente Teste',
    email: 'cliente@teste.com',
    senha: '123456',
    tipo: 'cliente'
  },
  {
    id: '2',
    nome: 'Admin Teste',
    email: 'admin@teste.com',
    senha: 'admin123',
    tipo: 'admin'
  }
];

export const AuthProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const login = (email, senha) => {
    const usuario = usuariosSimulados.find(
      u => u.email === email && u.senha === senha
    );
    
    if (usuario) {
      const { senha: _, ...usuarioSemSenha } = usuario;
      setUsuarioLogado(usuarioSemSenha);
      return { sucesso: true, usuario: usuarioSemSenha };
    }
    
    return { sucesso: false, erro: 'Email ou senha incorretos' };
  };

  const logout = () => {
    setUsuarioLogado(null);
  };

  const isLoggedIn = () => {
    return usuarioLogado !== null;
  };

  const isAdmin = () => {
    return usuarioLogado && usuarioLogado.tipo === 'admin';
  };

  const value = {
    usuarioLogado,
    login,
    logout,
    isLoggedIn,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

