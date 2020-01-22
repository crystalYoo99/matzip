import React from 'react';
import { Button, StyleSheet, View, Text, TextInput,AsyncStorage,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import Header from './Header'

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  state = {
    newMenu : '',
    newPerson : '',
    newTime : ''
  };
  
  componentDidMount = () => {
    let data = this.props.navigation.getParam("data",null)
    this.setState({
      newMenu: data.menu,
      newPerson: data.person,
      newTime: data.time
    })
  };

  render() {
    let update = this.props.navigation.getParam("update",null)
    let id = this.props.navigation.getParam("id",null)
    return (
      <View style={styles.container}>
        <View style = {{height: 40}}/>
        <Text style={styles.title}>게시판 업데이트</Text>
          <View style={styles.input}> 
              <TextInput 
                  style={styles.inputText}
                  placeholder='Enter new menu'
                  autoCorrect={ false }
                  value={this.state.newMenu}
                  onChangeText={(menu) => this.setState({newMenu: menu})}
              />
          </View>
        <View style = {{height : 15}}/>
        <View style={styles.input}> 
            <TextInput 
                style={styles.inputText}
                placeholder='Enter delivery time'
                autoCorrect={ false }
                value={this.state.newTime}
                onChangeText={(time) => this.setState({newTime:time})}
            /> 
        </View>
        <View style = {{height : 15}}/>
        
        <View style={styles.input}> 
            <TextInput 
                style={styles.inputText}
                placeholder='Enter person number'
                         autoCorrect={ false }          
                value={this.state.newPerson}          
                onChangeText={(person) => this.setState({newPerson:person})}
            />
        </View>
        <View style = {{height: 10}}/>
        <View style = {{flexDirection: 'row'}}>
            <View style = {{flex: 1}}/>
                <TouchableOpacity onPress={()=>{
                  const newInfo = {
                    id: id,
                    date: new Date().getDate(),
                    month: new Date().getMonth()+1,
                    menu: this.state.newMenu,
                    time: this.state.newTime,
                    person: this.state.newPerson,
                    enter : '입장하기'
                  };
                  
                  
                  update(id,newInfo);
                  this.props.navigation.goBack();
                }}>
                  <Text>Update</Text>
                </TouchableOpacity>
            <View style = {{flex: 1}}/>
        </View>
        <View style = {{height: 20}}/>
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
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});