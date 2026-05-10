import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SplashScreen = () => {
  // Animaciones para el logo y el texto
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        {/* LOGO CREATIVO: Una "N" estilizada con una brújula o diamante */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoSymbol}>N</Text>
          <View style={styles.diamond} />
        </View>
        
        <Text style={styles.bankName}>NovaBank</Text>
        <Text style={styles.tagline}>Secure Mobile Banking</Text>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // El azul oscuro que venimos usando
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3B82F6',
    marginBottom: 20,
    // Sombra para el logo
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  logoSymbol: {
    fontSize: 60,
    fontWeight: '900',
    color: '#FFFFFF',
    zIndex: 2,
  },
  diamond: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.5)',
    transform: [{ rotate: '45deg' }],
  },
  bankName: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: '#94A3B8',
    marginTop: 8,
    letterSpacing: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  loadingText: {
    color: '#64748B',
    fontSize: 14,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});


