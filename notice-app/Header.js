import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Header extends Component {
    state = {
            newMenu: '',
            newTime: '',
            newPerson: '',
    }

    addChat = () => {
        const info ={
                name: this.state.newMenu,
                time: this.state.newTime,
                person: this.state.newPerson,
            }
            this.props.add(info);
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.input}> 
                <TextInput 
                    style={styles.inputText}
                    placeholder='Enter new menu'
                    autoCorrect={ false }
                    value={this.state.newMenu}
                    onChangeText={(newMenu) => this.setState({newMenu})}
                />
                </View>

                <View style = {{height : 15}}/>

                <View style={styles.input}> 
                <TextInput 
                    style={styles.inputText}
                    placeholder='Enter delivery time'
                    autoCorrect={ false }
                    value={this.state.newTime}
                    onChangeText={(newTime) => this.setState({newTime})}
                />
                    
                </View>

                <View style = {{height : 15}}/>

                <View style={styles.input}> 
                <TextInput 
                    style={styles.inputText}
                    placeholder='Enter person number'
                    autoCorrect={ false }
                    value={this.state.newPerson}
                    onChangeText={(newPerson) => this.setState({newPerson})}
                />
                
                    
                </View>
                <View style = {{height: 10}}/>
                <View style = {{flexDirection: 'row'}}>
                    <View style = {{flex: 1}}/>
                        <TouchableOpacity onPress={this.addChat()}>
                            <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
                        </TouchableOpacity>
                    <View style = {{flex: 1}}/>
                </View>
                <View style = {{height: 20}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
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
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default Header;