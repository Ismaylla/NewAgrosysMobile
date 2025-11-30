
import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import SidebarLayout from "../../components/SidebarLayout";
import { FormBackground } from "../../components/FormBackground";
import { RowGrid } from "../../components/RowGrid";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { DateInput } from "../../components/DateInput";
import { PrimaryButton } from "../../components/PrimaryButton";
import { CancelButton } from "../../components/CancelButton";
import { RowCentralized } from "../../components/RowCentralized";
import { FormHeader } from "../../components/FormHeader";

export default function RegistroVendaScreen() {
  const navigation = useNavigation() as any;

  const [uap, setUap] = useState("");
  const [produto, setProduto] = useState("");
  const [quant, setQuant] = useState("");
  const [data, setData] = useState<Date | undefined>(undefined);
  const [formaPagamento, setFormaPagamento] = useState("");
  const [condicaoEntrega, setCondicaoEntrega] = useState("");
  const [precoUnitario, setPrecoUnitario] = useState("");
  const [desconto, setDesconto] = useState("");

  return (
    <SidebarLayout headerTitle="Gestão de Vendas">
      <View>

        {/* ✅ HEADER COM BOTÃO DE VOLTAR FUNCIONANDO */}
        <FormHeader
          title="Registrar Venda"
          subtitle="Registrar uma nova venda"
          onBack={() => navigation.goBack()}
        />

        <FormBackground>
          {/* Linha UAP / Produto */}
          <RowGrid>
            <Select
              label="UAP *"
              placeholder="Selecione UAP"
              value={uap}
              onChange={setUap}
              options={[
                { label: "UAP 1", value: "1" },
                { label: "UAP 2", value: "2" },
              ]}
            />

            <Select
              label="Produto *"
              placeholder="Selecione Produto"
              value={produto}
              onChange={setProduto}
              options={[
                { label: "Produto A", value: "A" },
                { label: "Produto B", value: "B" },
              ]}
            />
          </RowGrid>

          {/* Linha Quantidade / Data */}
          <RowGrid>
            <Input
              label="Quantidade *"
              placeholder="ex: 10"
              value={quant}
              onChange={setQuant}
            />

            <DateInput
              label="Data *"
              placeholder="dd/mm/aaaa"
              value={data}
              onChange={setData}
            />
          </RowGrid>

          {/* Linha Forma de Pagamento / Condição de Entrega */}
          <RowGrid>
            <Select
              label="Forma de Pagamento *"
              placeholder="Selecione"
              value={formaPagamento}
              onChange={setFormaPagamento}
              options={[
                { label: "Dinheiro", value: "dinheiro" },
                { label: "Cartão", value: "cartao" },
              ]}
            />

            <Select
              label="Condição de Entrega *"
              placeholder="Selecione"
              value={condicaoEntrega}
              onChange={setCondicaoEntrega}
              options={[
                { label: "Entrega Imediata", value: "imediata" },
                { label: "Programada", value: "programada" },
              ]}
            />
          </RowGrid>

          {/* Linha Preço Unitário / Desconto */}
          <RowGrid>
            <Input
              label="Preço Unitário *"
              placeholder="R$"
              value={precoUnitario}
              onChange={setPrecoUnitario}
            />

            <Input
              label="Desconto (%)"
              placeholder="%"
              value={desconto}
              onChange={setDesconto}
            />
          </RowGrid>

          {/* Valor Total */}
          <Input
            label="Valor Total"
            value={`R$ ${(
              (parseFloat(precoUnitario) || 0) *
              (parseFloat(quant) || 0) *
              (1 - (parseFloat(desconto) || 0) / 100)
            ).toFixed(2)}`}
            editable={false}
          />

          {/* ✅ Botão Cancelar agora volta corretamente */}
          <RowCentralized marginTop={20}>
            <CancelButton title="Cancelar" onPress={() => navigation.goBack()} />
          </RowCentralized>
        </FormBackground>

        {/* Botão Salvar */}
        <RowCentralized marginTop={35}>
          <PrimaryButton title="Salvar Venda" onPress={() => {}} />
        </RowCentralized>

      </View>
    </SidebarLayout>
  );
}
