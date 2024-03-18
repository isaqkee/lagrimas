import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={ESTILO.container}>
      <Text style={ESTILO.formTitle}>Login no sistema</Text>
      <TextInput style={ESTILO.formInput}
      placeholder="Informe o E-mail"
      keyboardType="email-address"
      autoCapitalize="none"
      autoComplete="email"
      />
      <TextInput style={ESTILO.formInput}
      placeholder="Informe a Senha"
      autoCapitalize="none"
      secureTextEntry
      />
     <Pressable style={ESTILO.formButton}>
        <Text>Logar</Text>
     </Pressable>
     <View style={ESTILO.subContainer}>
      <Pressable style={ESTILO.subButton}>
        <Text style={ESTILO.subTextButton}>Esqueci minha Senha</Text>
      </Pressable>
      <Pressable style={ESTILO.subButton}>
        <Text style={ESTILO.subTextButton}>Novo Usuário</Text>
      </Pressable>
     </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'orange',
    margin: 10,
  },
  formInput: {
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: 'orange',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  subButton: {
    padding: 10
  },
  subTextButton: {
    color: 'orange'
  }
});
