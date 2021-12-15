import React, {useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions/auth.actions';
import Colors from '../constants/Colors';
import { Provider as PaperProvider, Card as ImageCard} from 'react-native-paper';

const AuthScreen = ({navigation}) =>{
    const dispatch = useDispatch();
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        dispatch(signIn(email,password));
    }

    const handleGoToSignUp = () => {
      navigation.navigate('Registro');
  }

    return(
        <KeyboardAvoidingView style={styles.screen}>
           <View>
               <Image 
               style={styles.imgRegistro}
               source={require('../assets/images/iniciar-sesion.png')} />
            </View>
            <View style={styles.container}>
          
               
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize= 'none'
                    value={email}
                    onChangeText={setEmail} />
                <Text style={styles.label}>Clave</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    value={password} 
                    onChangeText={setPassword}/>
                  <Button 
                  title="Iniciar sesión"
                  onPress={handleSignIn}
                  color= {Colors.primary}
                  />
                  <TouchableOpacity
                  onPress={handleGoToSignUp}
                  >
                   <Text>¿No sos usuario? Registrate aquí</Text>
                   </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      marginBottom: 18,
      textAlign: 'center',
    },
    container: {
      marginTop: -90,
      width: '80%',
      maxWidth: 400,
      padding: 12,
      borderColor: '#ccc',
      backgroundColor: 'white',
    },
    prompt: {
      alignItems: 'center',
    },
    promptMessage: {
      fontSize: 16,
      color: '#333',
    },
    promptButton: {
      fontSize: 16,
      color: Colors.primary,
    },
    label: {
      marginVertical: 8,
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    imgRegistro: {
      height: '80%',
    }
  });

export default AuthScreen;