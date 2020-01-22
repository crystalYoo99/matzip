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
    this.update = this.update.bind(this);
  }
  state = {
    informations: []
  }
  componentDidMount() {
    AsyncStorage.getItem("Informations").then(data => {
      const informations = JSON.parse(data || '[]');
      this.setState({informations});
    })
  }
  // 할일 추가 함수
  add ( info ) {
    this.setState(prevState => {
      const informations = [
        info,
        ...prevState.informations
      ]
      AsyncStorage.setItem("Informations",JSON.stringify(informations));
      return({informations})
    });

  }; 

  remove = ( id ) => {
    this.setState(prevState => {
      const index = prevState.informations.findIndex(e => e.id === id);
      prevState.informations.splice(index, 1);
      return ({
        informations: [
          ...prevState.informations
        ]
      })
    });
  }
  update = (id,info) => {
    this.setState( prevState => {     
      const index = prevState.informations.findindex( e => e.id === id);     
      prevState.informations[index]=info;
      return({ 
        informations : [
          ...prevState.informations 
        ]
  
      })
      }
      )
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
          {this.state.informations.map(data=> {
            return(
              <View style={styles.body}>
                <View style = {{flexDirection: 'row'}}>
                <View style = {styles.topMaterials}>
                  <Text>{data.month}/{data.date}</Text>
                  <Text style = {{fontSize: 30,}}>{data.menu}</Text>
                </View>
                <TouchableOpacity onPressOut = {() => this.props.navigation.navigate('Update',{update: this.update, id:data.id, data:data})}>
                  <MaterialCommunityIcons style = {styles.todoDelBtn} size = {30} name = 'update' />
                </TouchableOpacity>
                <TouchableOpacity onPressOut = {() => this.remove(data.id)}>
                  <MaterialCommunityIcons style = {styles.todoDelBtn} size = {30} name = 'delete-outline' />
                </TouchableOpacity>
                </View>
                <View style = {styles.bottomMaterials}>
                  <View style = {styles.time}>
                    <Text>{data.time}</Text>
                  </View>
                  <View style = {{width: 5}}/>
                  <View style = {styles.person}>
                    <Text>{data.person}</Text>
                  </View>
                  <View style = {{width: 5}}/>
                  <View style = {styles.enter}>
                    <Button title = {data.enter} style = {{width: 30, boderWidth: 1, justifyContent: 'center', borderRadius: 5, backgroundColor: '#b7def8', boderColor: '#fdfdfd'}} onPress={()=>this.props.navigation.navigate('Chat')}></Button>
                  </View>
                </View>
              </View>
            );
          })}
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
  topMaterials: {
    width: 350, 
    flex: 1, 
    padding: 5, 
    justifyContent: 'center'
  },
  bottomMaterials: { 
    height: 45, 
    flexDirection: 'row', 
    borderWidth: 1, 
    padding: 5
  },
  time:{
    flex: 1, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 5
  },
  person:{
    flex: 1, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5
  },
  enter:{
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5, 
    backgroundColor: '#b7def8', 
    borderColor: '#fdfdfd' 
  },
  todoDelBtn: {
    color: '#777'
  },
});