import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <View style={imgLoja.container}>
      <Image resizeMode="contain" style={img.stretch} source={require("./assets/jardinagem.jpg")} />
    </View>
    <View style={cento.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Jardinagem Nature</Text>
        <Text style={{ fontSize: 10 }}>Uma boa e barata forma de organizar o seu jardim.</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title=">> Contato <<" onPress={() => Alert.alert("Possuimos diversos tipos de serviços, contate-nos: (49) 99988-3322")} /></View>
    </View>
    <View style={sobre.container}>
      <View style={{ flex:1 }}></View>
      <Text style={{ flex:10, justifyContent: 'center' }} >
        Estamos a uma década levando o melhor serviço de jardinagem para nossos clientes, com total satisfação e garantia, tudo isso no melhor preço possível.
        
      </Text>
      <View style={{ flex:1 }}></View>
    </View>
  </View>
  );
}

const img = StyleSheet.create({
  stretch: {
    width: 470,
    height: 470,
    flex: 1
  }
});
const imgLoja = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const cento = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const sobre = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});