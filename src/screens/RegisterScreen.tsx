
import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';


const countries = [
  "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", 
  "Costa Rica", "Cuba", "Dominican Republic", "Ecuador", "El Salvador", 
  "Guatemala", "Honduras", "Mexico", "Nicaragua", "Panama", 
  "Paraguay", "Peru", "Spain", "Uruguay", "Venezuela"
];

// Agregamos { goToLogin } como prop para poder volver
const RegisterScreen = ({ goToLogin }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobilePhone: '',
    address: '',
    country: 'Select your country',
    email: '',
    password: '',
  });

  const selectCountry = (item: string) => {
    setFormData({ ...formData, country: item });
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.bankName}>NovaBank</Text>
            <Text style={styles.subtitle}>Create your account</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Register</Text>

            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your first name"
              onChangeText={(text) => setFormData({...formData, firstName: text})}
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your last name"
              onChangeText={(text) => setFormData({...formData, lastName: text})}
            />

            <Text style={styles.label}>Mobile Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="300 000 0000"
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text) => setFormData({...formData, mobilePhone: text.replace(/[^0-9]/g, '')})}
            />

            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Street 123 #45-67"
              onChangeText={(text) => setFormData({...formData, address: text})}
            />

            <Text style={styles.label}>Country</Text>
            <TouchableOpacity 
              style={styles.input} 
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: formData.country === 'Select your country' ? '#94A3B8' : '#0F172A', fontSize: 16 }}>
                {formData.country}
              </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="example@mail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setFormData({...formData, email: text})}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              secureTextEntry
              onChangeText={(text) => setFormData({...formData, password: text})}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Finish Registration</Text>
            </TouchableOpacity>

            {/* BOTÓN PARA VOLVER AL LOGIN */}
            <TouchableOpacity onPress={goToLogin} style={styles.backButton}>
              <Text style={styles.backButtonText}>
                Already have an account? <Text style={{ color: '#2563EB' }}>Login</Text>
              </Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList
              data={countries}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.countryItem} 
                  onPress={() => selectCountry(item)}
                >
                  <Text style={styles.countryText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  header: { paddingHorizontal: 30, marginTop: 40, marginBottom: 20 },
  bankName: { color: '#FFFFFF', fontSize: 32, fontWeight: 'bold' },
  subtitle: { color: '#CBD5E1', fontSize: 16 },
  card: { backgroundColor: '#FFFFFF', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 30 },
  title: { fontSize: 26, fontWeight: '700', color: '#0F172A', marginBottom: 20 },
  label: { color: '#475569', fontSize: 12, marginBottom: 6, fontWeight: '700', textTransform: 'uppercase' },
  input: { 
    backgroundColor: '#F8FAFC', 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 18, 
    borderWidth: 1, 
    borderColor: '#E2E8F0',
    justifyContent: 'center'
  },
  button: { backgroundColor: '#0F172A', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  
  // ESTILOS NUEVOS PARA VOLVER
  backButton: { marginTop: 20, alignItems: 'center' },
  backButtonText: { color: '#64748B', fontSize: 15, fontWeight: '600' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#0F172A', textAlign: 'center' },
  countryItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  countryText: { fontSize: 16, color: '#334155' },
  closeButton: { 
    marginTop: 15, 
    backgroundColor: '#0F172A', 
    padding: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
});