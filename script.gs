function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index').setTitle("Classificação de Produtos");
}

function verificarEAtualizarEstoque() {
  const abaEstoque = "ESTOQUE";
  const abaAClassificar = "A CLASSIFICAR";
  const abaFormulario = "Respostas do formulario";

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetEstoque = spreadsheet.getSheetByName(abaEstoque);
  const sheetAClassificar = spreadsheet.getSheetByName(abaAClassificar);
  const sheetFormulario = spreadsheet.getSheetByName(abaFormulario);

  const ultimaLinha = sheetFormulario.getLastRow();
  const dadosItem = sheetFormulario.getRange(ultimaLinha, 1, 1, sheetFormulario.getLastColumn()).getValues()[0];
  
  const nomeItem = dadosItem[4];
  const quantidadeEntrada = parseInt(dadosItem[5]); 

  const statusCell = sheetFormulario.getRange(ultimaLinha, sheetFormulario.getLastColumn());
  const status = statusCell.getValue();

  if (status === "Contabilizado") {

    return;
  }
  
  const dadosEstoque = sheetEstoque.getRange(2, 1, sheetEstoque.getLastRow() - 1, 2).getValues();
  let itemEncontrado = false;

  for (let i = 0; i < dadosEstoque.length; i++) {
    const [nomeProdutoEstoque, quantidadeAtual] = dadosEstoque[i];
    
    if (nomeProdutoEstoque === nomeItem) {
      const novaQuantidade = parseInt(quantidadeAtual) + quantidadeEntrada;
      sheetEstoque.getRange(i + 2, 2).setValue(novaQuantidade); // Linha correspondente ao item
      itemEncontrado = true;
      break;
    }
  }

  if (!itemEncontrado) {
    sheetAClassificar.appendRow([nomeItem, quantidadeEntrada]);
  }

  statusCell.setValue("Contabilizado");
}

function obterItensAClassificar() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetAClassificar = spreadsheet.getSheetByName('A CLASSIFICAR');
  const dados = sheetAClassificar.getRange(2, 1, sheetAClassificar.getLastRow() - 1, sheetAClassificar.getLastColumn()).getValues();
  return dados;
}

function enviarClassificacao(itemIndex, valor, unidade, observacao) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheetAClassificar = spreadsheet.getSheetByName('a classificar');
  const sheetEstoque = spreadsheet.getSheetByName('estoque');
  
  const itemData = sheetAClassificar.getRange(itemIndex + 2, 1, 1, sheetAClassificar.getLastColumn()).getValues()[0];
  const [nome, quantidade] = itemData;
  
  sheetEstoque.appendRow([nome, quantidade, valor, unidade, observacao]);
  
  sheetAClassificar.deleteRow(itemIndex + 2);
}
