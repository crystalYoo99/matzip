import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ChatScreen from './ChatScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(AppNavigator);