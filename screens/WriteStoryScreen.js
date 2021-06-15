import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
    }

    render(){
      return(
      <View style={styles.container}> 
      <View>
          <Text style={{textAlign: 'center', backgroundColor: "lightgreen", fontSize: 30}}> STORY HUB</Text>
      </View>
      <View style={styles.inputView}>
         <TextInput 
         style={styles.inputBox}
         placeholder= "Title of the story"/>

         <TextInput 
         style={styles.inputBox}
         placeholder= "Author of the story"/>
         
         <TextInput 
         style={styles.storyBox}
         placeholder= "Author of the story"/>
      </View>
      </View>    
    );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
    },
    inputView: {
        flexDirection: 'row',
        margin: 20,
    },
    inputBox: {
        width: 200, height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        backgroundColor: "white",
    },
    storyBox: {
        width: 200, height: 200,
        borderWidth: 1.5,
        fontSize: 20,
        backgroundColor: "white", 
    }
})