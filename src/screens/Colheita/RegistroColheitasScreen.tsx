import React, { useState } from "react";
import { Text, View } from "react-native";
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

export default function RegistroColheitasScreen() {
  const [ciclo, setCiclo] = useState('');
  const [uap, setUAP] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidade, setUnidade] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const navigation = useNavigation();
  

  return (
    <SidebarLayout>
      <View>

        <FormHeader
          title="Registrar Colheita"
          subtitle="Registre uma nova colheita"
           onBack={() => navigation.navigate("Home" as never)}
        />

        <FormBackground>

          <RowGrid>
            <DateInput
              label="Data"
              placeholder="Selecione"
              value={date}
              onChange={setDate}
            />
            <Select
              label="Produto"
              placeholder="Unidade de Produção"
              value={produto}
              onChange={setProduto}
              options={[
                { label: "Ativo", value: "active" },
                { label: "Inativo", value: "inactive" },
                { label: "Pendente", value: "pending" },
              ]}
            />
          </RowGrid>

          <RowGrid>
            <Input
              label="Quant."
              placeholder="ex: 5000 kg"
              value={quantidade}
              onChange={setQuantidade}
            />
            <Select
              label="Unidade"
              placeholder="Selecione"
              value={unidade}
              onChange={setUnidade}
              options={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
              ]}
            />
          </RowGrid>

          <RowGrid>
            <Input
              label="Ciclo"
              placeholder="Meses"
              value={ciclo}
              onChange={setCiclo}
            />
            <Input
              label="UAP"
              placeholder="Unidade de Produção"
              value={uap}
              onChange={setUAP}
            />
          </RowGrid>

          <RowGrid>
            <Input
              label="Responsável"
              placeholder="Nome"
              value={responsavel}
              onChange={setResponsavel}
            />
            <Input
              label="Equipamento"
              placeholder="ex: Colheitadeira"
              value={equipamento}
              onChange={setEquipamento}
            />
          </RowGrid>

          <TextArea
            label="Observações"
            placeholder="Detalhes adicionais"
            value={''}
            onChange={() => {}}
          />

          <RowCentralized marginTop={20}>
            <CancelButton title="Cancelar" onPress={() => {}} />
            
          </RowCentralized>
          

        </FormBackground>

        <RowCentralized marginTop={35}>
            <PrimaryButton title="Salvar Colheita" onPress={() => {}} />
        </RowCentralized>
      </View>
    </SidebarLayout>
  );
}
