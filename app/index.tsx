import React, { useEffect, useState } from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import SplashScreen from '../src/screens/SplashScreen'; // Importa el nuevo Splash

export default function Index() {
  const [screen, setScreen] = useState('splash'); // Empezamos en splash

  useEffect(() => {
    // Simulamos una carga de 3 segundos
    if (screen === 'splash') {
      const timer = setTimeout(() => {
        setScreen('login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [screen]);
  

  return (
    <>
      {screen === 'splash' && <SplashScreen />}

      {screen === 'login' && (
        <LoginScreen 
          goToRegister={() => setScreen('register')} 
          goToHome={() => setScreen('home')} 
        />
      )}

      {screen === 'register' && (
        <RegisterScreen 
          goToLogin={() => setScreen('login')} 
        />
      )}

      {screen === 'home' && <HomeScreen />}
    </>
  );
}

