import {auth} from './firebase'
import React, { useState, useEffect } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const ConnexionScreen: React.FC = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
  
    // Inscription
    const registerUser = async (email: string, password: string) => {
      try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Utilisateur inscrit');
      } catch (error) {
      console.error(error);
      }
    };
    // Connexion
    const loginUser = async (email: string, password: string) => {
      try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Utilisateur connecté');
      } catch (error) {
      console.error(error);
      }
    };
  
    return(
      
      <View>
        <TextInput
          placeholder='Adresse mail'
          value = {email}
          onChangeText = {setMail}
        />
        <TextInput
          placeholder='Mot de passe'
          value = {password}
          onChangeText = {setPassword}
        />
        <Button
          title='Inscription'
          onPress={() => registerUser(email, password)}
        />
        <Button
          title='Connexion'
          onPress={() => loginUser(email, password)}
        />
      </View>
    )
  }
  
  export default ConnexionScreen;