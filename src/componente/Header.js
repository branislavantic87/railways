import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar, TouchableWithoutFeedback, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTML from 'react-native-render-html';

export default class Header extends React.Component {

  openLanguage = () => {
    this.props.onPressLang();
  };
  openFavorites = () => {
    Actions.login()
  };
  openMenu = () => {
    Actions.login()
  };
  openSearch = () => {
    this.props.onPress();
  };
  openFolder = () => {
    Alert.alert('You opened Folder')
  };
  openSettings = () => {
    Actions.HBF({ from: 'ab' })
  };
  openHome = () => {
    Actions.home()
  };


  render() {

    return (

      <View style={styles.navbarH}>

        <StatusBar barStyle="dark-content" hidden={true} />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Actions.pop()}><Image style={styles.ico} source={require('../ico/32/back.png')} /></TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 10, alignItems: 'center', alignSelf: 'center', width: '100%' }}><HTML html={this.props.title ? this.props.title : ''} /></View>
          <View style={{ flex: 5, flexDirection: 'row', justifyContent: 'flex-end' }}>

            <TouchableWithoutFeedback onPress={this.openLanguage}><Image style={styles.ico} source={require('../ico/32/earth.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openHome}><Image style={styles.ico} source={require('../ico/32/home.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openFavorites}><Image style={styles.ico} source={require('../ico/32/star.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openMenu}><Image style={styles.ico} source={require('../ico/32/menu.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openSearch}><Image style={styles.ico} source={require('../ico/32/search.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openFolder}><Image style={styles.ico} source={require('../ico/32/folder.png')} /></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.openSettings}><Image style={styles.ico} source={require('../ico/32/settings.png')} /></TouchableWithoutFeedback>


          </View>
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({

  navbarH: {
    height: '7%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: "center",
    flexDirection: 'row',
    paddingRight: 10,
  },
  ico: {
    height: 24,
    width: 24,
    marginLeft: 15,
  },
});
console.disableYellowBox = true;