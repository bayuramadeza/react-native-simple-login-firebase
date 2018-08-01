//Import library first
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () =>  (
  <View style = {{flex : 1}}>
      <Header headerText={'Album'}/>
      <AlbumList />
    </View>
  );
//Render it to device
AppRegistry.registerComponent('Simple', () => App);
