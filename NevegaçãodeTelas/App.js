import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign} from '@expo/vector-icons';

import TelaInicial from './componentes/TelaInicial/';
import {TelaProdutos} from './componentes/TelaProdutos/TelaProdutos';
import TelaContato from './componentes/TelaContato/';


const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator 
        screenOptions={{
          headerStyle:{ 
            backgroundColor: '#400303' 
          },
          headerTitleStyle: { 
            color: '#fff', 
            fontWeight: 'bold' 
          },
          headerTitleAlign: 'center',
          
          tabBarStyle: { 
            backgroundColor: "#fff"
          },
          tabBarLabelStyle:{ 
            fontSize: 14, 
            fontWeight: "bold"
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#ab887c",
          tabBarActiveBackgroundColor: "#400303",
        }}
      >
        <Abas.Screen 
          name="Tela Inicial" 
          component = { TelaInicial } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />         

<Abas.Screen 
          name="Produtos" 
          component = { TelaProdutos } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle" color={ color } size={ 20 } />
            ),
          }}
        />

<Abas.Screen 
          name="vendas" 
          component = { TelaProdutos } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle" color={ color } size={ 20 } />
            ),
          }}
        />

<Abas.Screen 
          name="Relatorio" 
          component = { TelaContato } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="phone" color={ color } size={ 20 } />
            ),
          }}
        />

      </Abas.Navigator>
    </NavigationContainer>
  )
}