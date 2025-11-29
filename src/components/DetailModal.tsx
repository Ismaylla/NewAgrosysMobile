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

// Definição das Props ATUALIZADA
interface DetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode; 
  // NOVAS PROPS OPCIONAIS para ações
  onEdit?: () => void;
  onDelete?: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isVisible, 
  onClose, 
  title, 
  children,
  onEdit, 
  onDelete 
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

          {/* NOVO: Seção de Ações (Botões: Editar e Excluir) */}
          {(onEdit || onDelete) && (
            <View style={styles.actionsContainer}>
              {onEdit && (
                <TouchableOpacity
                  style={[styles.actionButton, styles.editButton]}
                  onPress={onEdit}
                >
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
              )}
              {onDelete && (
                <TouchableOpacity
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={onDelete}
                >
                  <Text style={styles.actionText}>Excluir</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          
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
    fontWeight: fontWeights.bold as any, 
    color: colors.primary, 
    fontFamily: fontFamilies.heading,
  },
  closeButton: {
    padding: spacing.xs,
  },
  closeButtonText: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold as any,
    color: colors.primaryDark,
  },
  content: {
    flexGrow: 1, 
    marginBottom: spacing.md, // Espaço antes dos botões
  },

  // NOVOS ESTILOS PARA AÇÕES (BOTÕES)
  actionsContainer: {
    alignItems: 'center', 
    paddingTop: spacing.sm,
    // Adicionado padding horizontal para garantir que os botões não ultrapassem o padding original do modal
    paddingHorizontal: spacing.sm, 
  },
  actionButton: {
    width: '100%', 
    paddingVertical: spacing.sm, 
    borderRadius: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm, 
    
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  editButton: {
    backgroundColor: colors.primary, // Verde Escuro
  },
  deleteButton: {
    // Usando primaryDark para um contraste sutil ou colors.red se o seu tema usar
    backgroundColor: colors.primaryDark, 
  },
  actionText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold as any,
  }
});

export default DetailModal;