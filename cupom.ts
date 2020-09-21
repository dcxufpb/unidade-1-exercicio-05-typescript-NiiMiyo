let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function dados_loja() {
  // Implemente aqui
  if (dados.nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }
  return "";
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
