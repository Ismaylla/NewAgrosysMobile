// scripts/print.ts
import * as Print from "expo-print";
import { SaleReceiptData } from "../components/SaleReceiptModal";

export const printSaleReceipt = async (selectedNotaFiscal: SaleReceiptData) => {
  if (!selectedNotaFiscal) return;

  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8" />
        <title>${selectedNotaFiscal.id}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 24px;
            color: #333;
          }
          h1 {
            font-size: 22px;
            margin-bottom: 8px;
          }
          .section-title {
            margin-top: 28px;
            font-size: 18px;
            font-weight: bold;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
          }
          th, td {
            border: 1px solid #777;
            padding: 8px;
            font-size: 14px;
          }
          th {
            background: #eee;
          }
          .totals-table td {
            font-size: 16px;
            font-weight: bold;
          }
        </style>
      </head>

      <body>
        <h1>Nota Fiscal – ${selectedNotaFiscal.id}</h1>
        <p><strong>Data:</strong> ${selectedNotaFiscal.data}</p>
        <p><strong>UAP:</strong> ${selectedNotaFiscal.uap}</p>
        <p><strong>Cliente:</strong> ${selectedNotaFiscal.cliente}</p>

        <div class="section-title">Itens da Venda</div>

        <table>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Unit</th>
            <th>Desc</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>${selectedNotaFiscal.produto.nome}</td>
            <td>${selectedNotaFiscal.produto.quantidade}</td>
            <td>R$ ${selectedNotaFiscal.produto.precoUnitario.toFixed(2)}</td>
            <td>R$ ${selectedNotaFiscal.produto.desconto.toFixed(2)}</td>
            <td>R$ ${selectedNotaFiscal.produto.total.toFixed(2)}</td>
          </tr>
        </table>

        <div class="section-title">Pagamento</div>
        <p><strong>Forma de Pagamento:</strong> ${selectedNotaFiscal.formaPagamento}</p>
        <p><strong>Condição de Entrega:</strong> ${selectedNotaFiscal.condicaoEntrega}</p>

        <div class="section-title">Totais</div>

        <table class="totals-table">
          <tr>
            <td>Subtotal</td>
            <td>R$ ${selectedNotaFiscal.subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Descontos</td>
            <td>R$ ${selectedNotaFiscal.descontoTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Final</td>
            <td>R$ ${selectedNotaFiscal.totalFinal.toFixed(2)}</td>
          </tr>
        </table>

      </body>
      </html>
    `;

    await Print.printAsync({ html: htmlContent });

  } catch (err) {
    console.log("Erro ao imprimir:", err);
  }
};
