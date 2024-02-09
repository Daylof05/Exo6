import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WeatherScreen from './WeatherScreen';
import ConnexionScreen from './ConnexionScreen';
import { auth } from './firebase';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsUserLoggedIn(!!user);
    });
    return unsubscribe; // Nettoie l'abonnement lors du démontage
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Connexion'>
        <Tab.Screen name='Connexion' component={ConnexionScreen}/>
        {isUserLoggedIn && <Tab.Screen name='Meteo' component={WeatherScreen} />}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;