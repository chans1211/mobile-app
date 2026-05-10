import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* FONDO AZUL SUPERIOR (Curva de la imagen) */}
      <View style={styles.topBackground} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.userSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>MV</Text>
            </View>
            <View>
              <Text style={styles.greeting}>¡Hola, Usiario!</Text>
              <Text style={styles.subtitle}>Qué bueno verte de nuevo 👋</Text>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.iconButton}>🔔</Text>
            <Text style={styles.iconButton}>✉️</Text>
          </View>
        </View>

        {/* TARJETA PRINCIPAL (Account Card) */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.accountTitle}>Cuenta Principal</Text>
              <Text style={styles.accountNumber}>•••• 1234</Text>
            </View>
            <Text style={styles.viewIcon}>👁️</Text>
          </View>

          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.balanceLabel}>Saldo disponible</Text>
              <Text style={styles.balance}>$25,680.50</Text>
              <Text style={styles.currentBalance}>Saldo actual: $26,150.75</Text>
              <Text style={styles.statsText}>↑ 8.5% vs. mes anterior</Text>
            </View>
            {/* Aquí iría el gráfico de la imagen */}
            <View style={styles.placeholderGraph} />
          </View>

          {/* ACCIONES DENTRO DE LA TARJETA */}
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIconCircle}><Text>↓</Text></View>
              <Text style={styles.actionText}>Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconCircle, {backgroundColor: '#DCFCE7'}]}><Text style={{color: '#16A34A'}}>⇄</Text></View>
              <Text style={styles.actionText}>Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconCircle, {backgroundColor: '#F1F5F9'}]}><Text>🧾</Text></View>
              <Text style={styles.actionText}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <View style={[styles.actionIconCircle, {backgroundColor: '#EFF6FF'}]}><Text>•••</Text></View>
              <Text style={styles.actionText}>Más</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ACCIONES RÁPIDAS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Accesos rápidos</Text>
          <Text style={styles.sectionLink}>Personalizar ✎</Text>
        </View>

        <View style={styles.quickActions}>
          <QuickAction icon="📱" label="Recargar" />
          <QuickAction icon="💎" label="Pagar" />
          <QuickAction icon="💳" label="Tarjetas" />
          <QuickAction icon="📈" label="Inversiones" />
          <QuickAction icon="+" label="Ver más" />
        </View>

        {/* CUENTAS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis cuentas</Text>
          <Text style={styles.sectionLink}>Ver todas ›</Text>
        </View>

        <View style={styles.listCard}>
          <AccountItem title="Cuenta de Ahorros" sub="•••• 5678" amount="$8,430.20" icon="🐷" />
          <View style={styles.divider} />
          <AccountItem title="Cuenta Corriente" sub="•••• 9012" amount="$15,250.35" icon="💼" />
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const QuickAction = ({ icon, label }: any) => (
  <View style={styles.quickCard}>
    <View style={styles.quickIconContainer}><Text style={styles.quickIcon}>{icon}</Text></View>
    <Text style={styles.quickText}>{label}</Text>
  </View>
);

const AccountItem = ({ title, sub, amount, icon }: any) => (
  <View style={styles.listItem}>
    <View style={styles.row}>
      <View style={styles.itemIcon}><Text>{icon}</Text></View>
      <View>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listSubtitle}>{sub}</Text>
      </View>
    </View>
    <View style={styles.row}>
      <Text style={styles.amountText}>{amount}</Text>
      <Text style={styles.arrow}>›</Text>
    </View>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  topBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
    backgroundColor: '#003DA5', // Azul de la imagen
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  userSection: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 50, height: 50, borderRadius: 25,
    backgroundColor: '#3B82F6', justifyContent: 'center', alignItems: 'center',
    marginRight: 12, borderWidth: 2, borderColor: '#FFF'
  },
  avatarText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  greeting: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  subtitle: { fontSize: 13, color: '#E2E8F0' },
  notificationContainer: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { fontSize: 22, marginLeft: 15, color: '#FFF' },

  mainCard: {
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 25,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  accountTitle: { fontSize: 16, color: '#64748B', fontWeight: '600' },
  accountNumber: { fontSize: 14, color: '#94A3B8' },
  viewIcon: { fontSize: 18 },
  balanceContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center' },
  balanceLabel: { fontSize: 14, color: '#64748B' },
  balance: { fontSize: 32, fontWeight: 'bold', color: '#0F172A', marginVertical: 4 },
  currentBalance: { fontSize: 12, color: '#94A3B8' },
  statsText: { fontSize: 12, color: '#16A34A', fontWeight: 'bold', marginTop: 5 },
  placeholderGraph: { width: 100, height: 50, backgroundColor: '#F1F5F9', borderRadius: 10 }, // Espacio para el gráfico

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  actionButton: { alignItems: 'center', flex: 1 },
  actionIconCircle: { width: 45, height: 45, borderRadius: 22, backgroundColor: '#EFF6FF', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  actionText: { fontSize: 11, color: '#64748B', fontWeight: '600' },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 15, alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A' },
  sectionLink: { fontSize: 14, color: '#3B82F6', fontWeight: '600' },

  quickActions: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, marginBottom: 25 },
  quickCard: { alignItems: 'center', width: 70 },
  quickIconContainer: { width: 55, height: 55, borderRadius: 18, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', elevation: 2, marginBottom: 8 },
  quickIcon: { fontSize: 24 },
  quickText: { fontSize: 10, textAlign: 'center', color: '#64748B' },

  listCard: { backgroundColor: '#FFF', marginHorizontal: 20, borderRadius: 20, paddingVertical: 10, elevation: 3 },
  listItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center' },
  itemIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  listTitle: { fontSize: 15, fontWeight: '600', color: '#0F172A' },
  listSubtitle: { fontSize: 12, color: '#94A3B8' },
  amountText: { fontSize: 16, fontWeight: '700', color: '#0F172A', marginRight: 10 },
  arrow: { color: '#94A3B8', fontSize: 20 },
  divider: { height: 1, backgroundColor: '#F1F5F9', marginHorizontal: 15 },
});