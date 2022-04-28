import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

let customFonts={'bubblegum-sans':require("../assets/font/BubblegumSans-Regular.ttf")}

export default class TTCard extends Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }

 async loadFont(){
     await Font.loadAsync(customFonts)
     this.setState({
         fontsLoaded:true
        });
 }
 componentDidMount(){
     this.loadFont()
 }
    render(){
        
          if(!this.state.fontsLoaded){
              return <AppLoading/>
          }
          else{
           return(
            <View >
               
                <View style={styles.cardContainer}>
                     <Text style={[styles.text,{color:'black',fontSize:RFValue(30),fontFamily:'bubblegum-sans',marginTop:RFValue(20)}]}>{this.props.TTData.Title} </Text>
                    



                    <TouchableOpacity style={styles.name1} onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip11})}}>
                        <Text style={styles.text}>
                            {this.props.TTData.Tip1}
                        </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.name1}onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip22})}}>
                        <Text style={styles.text}>
                            {this.props.TTData.Tip2}
                        </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.name1}onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip33})}}>
                        <Text style={styles.text}>
                            {this.props.TTData.Tip3}
                            </Text>
                            </TouchableOpacity>
                    <TouchableOpacity style={styles.name1}onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip44})}}>
                        <Text style={styles.text}>
                            {this.props.TTData.Tip4}
                        </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.name1}onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip55})}}>
                        <Text style={styles.text}>{this.props.TTData.Tip5}
                        </Text>
                        </TouchableOpacity>
                    <TouchableOpacity style={styles.name1}onPress={()=>{this.props.navigation.navigate("TTScreen",{sport:this.props.TTData.Tip66})}}>
                        <Text style={styles.text}>
                            {this.props.TTData.Tip6}
                            </Text>
                            </TouchableOpacity>

                            
                  
                </View>
            </View>
            
            
        )
          }
    }
}

const styles=StyleSheet.create({
    name:{
        fontSize:RFValue(20),
    
        alignItems:"center",
        justifyContent:"center",
        fontWeight:'bold',
        color:"white",
        fontFamily :'bubblegum-sans', 
        marginBottom:20, 
    },

    name1:{
        fontSize:RFValue(15),
        padding:RFValue(20) ,
        fontWeight:'bold',
        color:"white",
        backgroundColor:'#15193c',
        width:200,
        height:100,
        borderRadius:20,
        marginBottom:30,
        alignItems:'center',
        justifyContent:'center',
        fontFamily :'bubblegum-sans',
    },
    text:{alignSelf:'center',
    color:'white',},
 
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "white",
        borderRadius: RFValue(20),
        flex:1,
        marginTop:20,
        marginBottom:10,
         alignItems:"center",
        justifyContent:"center",
      },
  
  
   
     
})