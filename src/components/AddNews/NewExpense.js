import React, { Component } from 'react';
import {
    StyleSheet,
    View, 
    TouchableOpacity,
    Dimensions,
    Image
  } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Text, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
//import { RNCamera } from 'react-native-camera';

class NewExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
    }
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      this.setState({ path: data.uri});
      console.log(data.uri);
    }
  };

  renderCamera() {
    return (
      <View>
      <Header>
      <Left>
        <Button transparent
        onPress={Actions.main}>
          <Text style={{fontSize:12}}>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>New Expense</Title>
      </Body>
      <Right>
        <Button transparent
        onPress={Actions.newexpenseform}>
        <Text style={{fontSize:12}}>Skip</Text>
        </Button>
      </Right>
    </Header>
      <View style={styles.container}>
            <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
            <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}
                path = {this.props.path}
            >
            </TouchableOpacity>
            </View>
          </View>
          </View>
    );
  }

  renderImage(){
    return (
      <View>
      <Header>
      <Left>
        <Button transparent
        onPress={() => this.setState({ path: null})}>
          <Text style={{fontSize:12}}>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>New Expense</Title>
      </Body>
      <Right>
        <Button transparent
        onPress={Actions.newexpenseform}>
        <Text style={{fontSize:12}}>Accept</Text>
        </Button>
      </Right>
    </Header>
        <Image
          source={{uri: this.state.path}}
          style={styles.previewMain}/>
      </View>
    );
  }

    render(){
        return(
          <Container>
        <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
        </View>
          </Container>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      previewMain: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        transform: [
          {rotate: '90deg'}
        ],
      },
      capture: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: 'green',
        marginBottom: 15,
        backgroundColor: 'purple'
      },
     
    });


export default NewExpense;