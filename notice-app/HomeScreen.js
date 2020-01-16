import React from 'react';
import { Button, StyleSheet, View, Text, AsyncStorage,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  constructor(props){
    super(props)
    this.add = this.add.bind(this);
  }
  state = {
    information: 
      {
        addTime : '2019/11/03',
        name : '음식점' ,
        time : '0:0',
        person : '0/0'
      }

  }
  // 할일 추가 함수
  add = ( info ) => {
    const newMenu = {
      addTime : Date.now(),
      name : info.name,
      time : info.time,
      person : info.person
    }
    this.setState(prevState => {
      this.state.information.name = newMenu.name,
      this.state.information.time = newMenu.time,
      this.state.information.person = newMenu.person
    });
    console.log(this.state.information);
  } 
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style = {styles.headerText}>
            배달게시판  
          </Text>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Details', {add: this.add})}>
              <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
            </TouchableOpacity>
          </View>
      <View style={styles.body}>
        <View style = {{width: 350, flex: 1, padding: 5, justifyContent: 'center'}}>
          <Text>{this.state.information.addTime}</Text>
          <Text style = {{fontSize: 30,}}>{this.state.information.name}</Text>
        </View>
        <View style = {{ height: 45, flexDirection: 'row', borderwidth: 1, padding: 5}}>
          <View style = {{flex: 1, borderWidth: 1,alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
            <Text>{this.state.information.time}</Text>
          </View>
          <View style = {{width: 5}}/>
          <View style = {{flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center',borderRadius: 5}}>
            <Text>{this.state.information.person}</Text>
          </View>
          <View style = {{width: 5}}/>
          <View style = {{flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center',borderRadius: 5, backgroundColor: '#b7def8', borderColor: '#fdfdfd' }}>
            <Text>입장하기</Text>
          </View>
        </View>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  },
  header: {
    height: 80,
    backgroundColor: '#5ba5f9',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
},
  headerText: {
    fontSize: 22,
    color: 'white',
  },
  body: {
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
},
});