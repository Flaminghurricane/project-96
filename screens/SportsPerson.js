import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


import { FlatList } from "react-native-gesture-handler";
import SportsCard from "../screens/SportsCard"


let SportsData = require("../assets/Temp.json");
export default class SportsPerson extends Component {
  renderItem=({item:content})=>{
  return <SportsCard SportsData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>{
    index.toString()
  }
  render() {
    return (
      
        <View style={styles.container}>
         <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
            
               <Ionicons
               // style={styles.iconImage}
                    name={"american-football-outline"}
                    size={RFValue(30)}
                    color={"white"}
                  />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  styles.appTitleText
                }
              >
                Sports App
              </Text>
            </View>
          </View>
          
              <FlatList
                keyExtractor={this.keyExtractor}
                data={SportsData}
                renderItem={this.renderItem}
              /></View>
              
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.94,
    backgroundColor: "black"
  },
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

  
 
 
});

