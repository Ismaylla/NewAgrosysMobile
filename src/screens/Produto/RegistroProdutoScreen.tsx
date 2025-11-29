import React, { useState } from "react";
import { View, ScrollView } from "react-native";
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
import { TextArea } from "../../components/TextArea";
import { RowCentralized } from "../../components/RowCentralized";
import { FormHeader } from "../../components/FormHeader";

export default function RegistroProdutoScreen() {
    
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [status, setStatus] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [local, setLocal] = useState('');
  const [validade, setValidade] = useState<Date | undefined>(undefined);
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation();

  const menuItems = [
    {title: "Gestão de Produtos", onPress: () => navigation.navigate("ListagemProdutos" as never),},
    {title: "Gestão de Colheitas", onPress: () => navigation.navigate("ListagemColheitas" as never),},
    {title: "Gestão de Vendas", onPress: () => navigation.navigate("RegistroVenda" as never),},
    { title: "Meu Perfil", onPress: () => navigation.navigate("Perfil" as never) },
    { title: "Sair", onPress: () => navigation.navigate("Home" as never) },
  ];

  return (
    <SidebarLayout headerTitle="Registrar Produto" menuItems={menuItems}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FormHeader
          title="Registrar Produto"
          subtitle="Registre um novo produto"
          onBack={() => navigation.navigate("ListagemProdutos" as never)}
        />

        <FormBackground>
          {/* Nome do Produto */}
          <Input
            label="Nome do Produto: *"
            placeholder="Digite o nome"
            value={nome}
            onChange={setNome}
          />

          {/* Linha Categoria / Preço Unitário */}
          <RowGrid>
            <Select
              label="Categoria: *"
              placeholder="Selecione a categoria"
              value={categoria}
              onChange={setCategoria}
              options={[
                { label: "Categoria A", value: "a" },
                { label: "Categoria B", value: "b" },
              ]}
            />
            <Input
              label="Preço Unitário: *"
              placeholder="R$"
              value={preco}
              onChange={setPreco}
            />
          </RowGrid>

          {/* Linha Status / Quantidade */}
          <RowGrid>
            <Select
              label="Status: *"
              placeholder="Selecione"
              value={status}
              onChange={setStatus}
              options={[
                { label: "Ativo", value: "active" },
                { label: "Inativo", value: "inactive" },
              ]}
            />
            <Input
              label="Quantidade: *"
              placeholder="ex: 100"
              value={quantidade}
              onChange={setQuantidade}
            />
          </RowGrid>

          {/* Fornecedor */}
          <Input
            label="Fornecedor: *"
            placeholder="Nome do fornecedor"
            value={fornecedor}
            onChange={setFornecedor}
          />

          {/* Local de Armazenamento */}
          <Input
            label="Local de Armazenamento: *"
            placeholder="Local"
            value={local}
            onChange={setLocal}
          />

          {/* Data de Validade */}
          <DateInput
            label="Data de Validade: *"
            placeholder="Selecione"
            value={validade}
            onChange={setValidade}
          />

          {/* Descrição */}
          <TextArea
            label="Descrição:"
            placeholder="Detalhes adicionais"
            value={descricao}
            onChange={setDescricao}
          />

          {/* Botão Cancelar */}
          <RowCentralized marginTop={20}>
            <CancelButton title="Cancelar" onPress={() => navigation.navigate("ListagemProdutos" as never)} />
          </RowCentralized>
        </FormBackground>

        {/* Botão Salvar */}
        <RowCentralized marginTop={35}>
          <PrimaryButton title="Registrar Produto" onPress={() => navigation.navigate("ListagemProdutos" as never)} />
        </RowCentralized>
      </ScrollView>
    </SidebarLayout>
  );
}
