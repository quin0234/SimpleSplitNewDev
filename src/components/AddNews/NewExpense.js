import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';import { Actions } from 'react-native-router-flux';

import { CameraKitCamera } from 'react-native-camera-kit';

class NewExpense extends Component {
  render(){
    return(
      <CameraKitCamera
  ref={cam => this.camera = cam}
  style={{
    flex: 1,
    backgroundColor: 'white'
  }}
  cameraOptions={{
    flashMode: 'auto',             // on/off/auto(default)
    focusMode: 'on',               // off/on(default)
    zoomMode: 'on',                // off/on(default)
    ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
    ratioOverlayColor: '#00000077' // optional
  }}
  onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
  
/>
    )
  }
    
    }



export default NewExpense;