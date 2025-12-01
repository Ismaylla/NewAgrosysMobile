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

export default function RegistroUapScreen() {
  const [nomeUap, setNomeUap] = useState("");
  const [area, setArea] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [tipoCultivo, setTipoCultivo] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const navigation = useNavigation();

  return (
    <SidebarLayout headerTitle="Cadastrar UAP">
      <ScrollView showsVerticalScrollIndicator={false}>
        <FormHeader
          title="Cadastrar UAP"
          subtitle="Controle de Cadastros de UAPs"
          onBack={() => navigation.goBack()}
        />

        <FormBackground>

          <Input
            label="Nome da UAP: *"
            placeholder="Digite o nome"
            value={nomeUap}
            onChange={setNomeUap}
          />


          <RowGrid>
            <Input
              label="Área (Hectares): *"
              placeholder="ex: 2.5"
              value={area}
              onChange={setArea}
            />

            <Select
              label="Tipo de Cultivo: *"
              placeholder="Selecione o tipo"
              value={tipoCultivo}
              onChange={setTipoCultivo}
              options={[
                { label: "Fruticultura", value: "fruticultura" },
                { label: "Hortaliças", value: "hortalicas" },
                { label: "Grãos", value: "graos" },
                { label: "Outro", value: "outro" },
              ]}
            />
            
          </RowGrid>


          <Input
            label="Responsável: *"
            placeholder="Nome do responsável"
            value={responsavel}
            onChange={setResponsavel}
          />

          <Input
            label="Localização: *"
            placeholder="ex: Bloco A"
            value={localizacao}
            onChange={setLocalizacao}
          />

          <TextArea
            label="Observações:"
            placeholder="Detalhes adicionais"
            value={observacoes}
            onChange={setObservacoes}
          />

          <RowCentralized marginTop={20}>
            <CancelButton
              title="Cancelar"
              onPress={() => navigation.navigate("ListagemUap" as never)}
            />
          </RowCentralized>
        </FormBackground>

        <RowCentralized marginTop={35}>
          <PrimaryButton
            title="Registrar UAP"
            onPress={() => navigation.navigate("ListagemUap" as never)}
          />
        </RowCentralized>
      </ScrollView>
    </SidebarLayout>
  );
}
