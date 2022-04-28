import React, { Component } from 'react'
import { FlatList } from "react-native-gesture-handler";
import TTCard from "../screens/TTCard"
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
let TTData = require("../assets/TT.json");

export default class TipsandTricks extends Component {
  renderItem=({item:content})=>{
  return <TTCard TTData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>{
    index.toString()
  }
  render() {
    return (
      
        <View style={{flex:1,backgroundColor:"black"}}>
         <SafeAreaView style={styles.droidSafeArea} />
               <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            
               <Ionicons
                    name={"american-football-outline"}
                    size={RFValue(30)}
                    color={"white"}
                  />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>
               Tips  and Tricks
               
                </Text>
            </View>
          </View>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={TTData}
                renderItem={this.renderItem}
              /></View>
      
    )
  }
}

const styles=StyleSheet.create({

 
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },

 
   appTitle: {
    flexDirection: "row",
    marginBottom:10
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
 
    appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
})
