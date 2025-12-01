import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 🎨 Tema
import { colors } from '../theme/colors';
import { fontSizes, fontFamilies } from '../theme/fonts';
import { spacing } from '../theme/spacing';

interface SaleSuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  onGoToNotesPage: () => void;
}

const SaleSuccessModal: React.FC<SaleSuccessModalProps> = ({
  isVisible,
  onClose,
  onGoToNotesPage
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>

        <View style={styles.modal}>
          
          {/* Botão de fechar */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={26} color={colors.primaryDark} />
          </TouchableOpacity>

          {/* Ícone de sucesso */}
          <Ionicons name="checkmark-circle" size={70} color={colors.primary} />

          {/* Título */}
          <Text style={styles.title}>Venda cadastrada!</Text>

          {/* Mensagem */}
          <Text style={styles.message}>
            Sua venda foi registrada com sucesso.
          </Text>

          <Text style={[styles.message, { marginTop: spacing.xs }]}>
            A nota fiscal está sendo gerada.
          </Text>

          {/* Botão principal */}
          <TouchableOpacity
            style={styles.button}
            onPress={onGoToNotesPage}
          >
            <Text style={styles.buttonText}>Ir para notas fiscais</Text>
          </TouchableOpacity>

        </View>

      </View>
    </Modal>
  );
};

export default SaleSuccessModal;


// -----------------------------
// 🎨 ESTILOS
// -----------------------------
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },

  modal: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    elevation: 10,
    position: 'relative',
  },

  closeButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    padding: spacing.xs,
  },

  title: {
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.heading,
    color: colors.primary,
    marginTop: spacing.sm,
  },

  message: {
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.text,
    color: colors.textGray,
    textAlign: 'center',
    marginTop: spacing.sm,
  },

  button: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: spacing.xs,
    marginTop: spacing.lg,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontFamily: fontFamilies.heading,
  },
});
