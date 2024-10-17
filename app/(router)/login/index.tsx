import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('/(drawer)/layoutDrawer')
    

    // Perform your login logic here, for example API call
    Alert.alert('Login Success', `Welcome ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.welcomeNote}>Welcome back you've
        been missed!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.password}>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Redirect to Signup')}>
        <Text style={styles.signupText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    gap: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    // marginBottom: 30,
    color: "#1F41BB"
  },
  welcomeNote: {
    fontWeight: "600",
    fontSize: 22,
    marginHorizontal: 36,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#F1F4FF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: "#626262"
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1F41BB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  forgot: {
    color: "#1F41BB",
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
  },
  password: {
    alignSelf: 'flex-end',
  }
});

export default LoginPage;
