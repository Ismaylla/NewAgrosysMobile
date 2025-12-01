
import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
} from 'react-native';

// Importando Tema
import { colors } from '../theme/colors'; 
import { fontSizes, fontWeights, fontFamilies } from '../theme/fonts'; 
import { spacing } from '../theme/spacing'; 

// Props
interface DetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;

  // Ações opcionais
  onEdit?: () => void;
  onDelete?: () => void;

  // 💚 NOVO – usado SOMENTE na tela de vendas
  onViewNF?: () => void; 
}

const DetailModal: React.FC<DetailModalProps> = ({ 
  isVisible, 
  onClose, 
  title, 
  children,
  onEdit, 
  onDelete,
  onViewNF
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>

          {/* Conteúdo */}
          <ScrollView style={styles.content}>
            {children}
          </ScrollView>

          {/* BOTÕES DINÂMICOS */}
          {(onEdit || onDelete || onViewNF) && (
            <View style={styles.actionsContainer}>

              {/* Ver Notas Fiscais — exclusivo da tela de vendas */}
              {onViewNF && (
                <TouchableOpacity 
                  style={[styles.actionButton, styles.nfButton]}
                  onPress={onViewNF}
                >
                  <Text style={styles.actionText}>Ver Notas Fiscais</Text>
                </TouchableOpacity>
              )}

              {/* Editar */}
              {onEdit && (
                <TouchableOpacity 
                  style={[styles.actionButton, styles.editButton]}
                  onPress={onEdit}
                >
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
              )}

              {/* Excluir */}
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    padding: spacing.md,
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
    fontFamily: fontFamilies.heading,
    fontWeight: fontWeights.bold as any,
    color: colors.primary,
  },

  closeButton: { padding: spacing.xs },
  closeButtonText: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold as any,
    color: colors.primaryDark,
  },

  content: {
    flexGrow: 1,
    marginBottom: spacing.md,
  },

  actionsContainer: {
    alignItems: 'center',
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.sm,
  },

  actionButton: {
    width: '100%',
    paddingVertical: spacing.sm,
    borderRadius: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
    elevation: 5,
  },

  nfButton: {
    backgroundColor: colors.primary, // verde limpo para vendas
  },

  editButton: {
    backgroundColor: colors.primary,
  },

  deleteButton: {
    backgroundColor: colors.primaryDark,
  },

  actionText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.bold as any,
  }
});

export default DetailModal;
