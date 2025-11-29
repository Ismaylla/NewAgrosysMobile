// src/components/DetailModal.tsx

import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
} from 'react-native';

// 💡 Importando as constantes de tema
import { colors } from '../theme/colors'; 
import { fontSizes, fontWeights, fontFamilies } from '../theme/fonts'; 
import { spacing } from '../theme/spacing'; 

// Definição das Props
interface DetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  // O children permite passar qualquer componente React para o corpo do modal
  children: React.ReactNode; 
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isVisible, 
  onClose, 
  title, 
  children 
}) => {
  return (
    <Modal
      animationType="fade" 
      transparent={true} 
      visible={isVisible} 
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          {/* Cabeçalho do Modal */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {/* Botão de Fechar */}
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          
          {/* Conteúdo dinâmico (envolvido por ScrollView para evitar overflow) */}
          <ScrollView style={styles.content}>
            {children}
          </ScrollView>
          
        </View>
      </View>
    </Modal>
  );
};

// Estilos Utilizando Constantes de Tema
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  modalView: {
    width: '90%', 
    maxHeight: '80%',
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardGray,
  },
  title: {
    fontSize: fontSizes.lg, 
    // Correção de tipagem
    fontWeight: fontWeights.bold as any, 
    color: colors.primary, 
    fontFamily: fontFamilies.heading,
  },
  closeButton: {
    padding: spacing.xs,
  },
  closeButtonText: {
    fontSize: fontSizes.md,
    // Correção de tipagem
    fontWeight: fontWeights.bold as any,
    color: colors.primaryDark,
  },
  content: {
    flexGrow: 1, 
  },
});

export default DetailModal;