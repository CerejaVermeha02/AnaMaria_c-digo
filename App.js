import React from "react";
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import{NavigationContainer}from'@react-natigation/native';
import{createStackNavigator}from'@react-navigation/stack';
//---TELA DE CONFIGURAÇÕES(A NOVA PÁGINA)---
function SettingsScreen(){
    return(
        <View style={styles.centerContainer}>
         <Text style={styles.hearder}>Página de Configurações</Text>
         <Text>Aqui você pode ajustar as preferências do app.</Text>
        </View>
        );
      ) 
    
        

const data=[
    {id: '1', title : 'configurações'},
    {id: '2', title: 'perfil'},
    {id: '3', title: 'mensagem'},
    {id: '4', title: 'segurança'},
    {id: '5', title: 'ajuda'},
];
    const renderItem = ({item}) => (
<TouchableOpacity
        style={styles.button} 
        onPress ={() => alert (`você clicou em ${item.title}`)}>
            if(item.id==='1'){
            //Se for o ID 1. navega para a página de Configurações
             navigation.navigate('Settings');
            }
           }} 
          >
            <Text style={styles.buttonText}> {item.title}</Text>
           </TouchableOpacity>
);

   return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Menu Principal
            </Text>
            <FlatList data={data} renderItem={renderItem} keyExtraction={item => item.id} contentContainerStyles={styles.listPadding}/>
        </SafeAreaView>
    );
}

//---CONFIGURAÇÃO DO NAVEGADOR---
const Stack=createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
        <Stack.Screen
    name=
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    header:{
      fontSize:24,
      fontWeight:'bold',
      textAlign:'center',
      marginVertical:20
      },
    listPadding:{
        paddingHorizontal: 20
    },
    button:{
        backgroundColor: '#007aff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems:'center',
        elevation: 2,
    shadowColor: '#000',
    shadowOffset:{width:0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius:4,},
    buttonText: {
    color: '#fff',
        fontSize: 16,
        fontWeight:'600',
    },
    });
