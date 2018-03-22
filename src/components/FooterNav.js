import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import Summary from './MainApp/Summary'; 
import Requests from './MainApp/Requests';
import Memos from './MainApp/Memos';
import Settings from './MainApp/Settings';

class FooterNav extends Component {

    constructor(){
        super()
        this.state = {
            page: "HomeScreen"

        }
    }

    render(){
        return(
          <View style={{
              flex: 1
          }}>
            {this.state.page === "HomeScreen" && <Summary navigation={this.props.navigation}></Summary>}
            {this.state.page === "RequestsScreen" && <Requests navigation={this.props.navigation}></Requests>}
            {this.state.page === "MemosScreen" && <Memos navigation={this.props.navigation}></Memos>}
            {this.state.page === "Settings" && <Settings navigation={this.props.navigation}></Settings>}
    
            <Tabbar
             tabbarBgColor="#ffffff"
             iconColor="#7C6990"
             selectedIconColor="#4F3E62"
             type="button"
             rippleColor="#000000"
             tabbarBorderTopColor="#239B97"
              stateFunc={(tab) => {
                this.setState({page: tab.page})
                //#643184 Purple
                //#18A298 Green
                //this.props.navigation.setParams({tabTitle: tab.title})
              }}
              activePage={this.state.page}
              tabs={[
                {
                  page: "HomeScreen",
                  icon: "md-pie",
                  iconColor: "#000000"
                },
                {
                  page: "RequestsScreen",
                  icon: "ios-chatbubbles",
                },
                {
                  page: "MemosScreen",
                  icon: "ios-mic",
                },
                {
                  page: "Settings",
                  icon: "ios-person",
                },
              ]}
            />
            <ActionButton buttonColor="rgba(35,155,151,100)" position="center">
          <ActionButton.Item buttonColor='#239B97' onPress={() => Actions.newexpenseModal()}>
            <Icon name="ios-camera" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#239B97' onPress={() => Actions.newmemoModal()}>
            <Icon name="ios-recording" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#239B97' onPress={() => Actions.newrequestModal()}>
            <Icon name="ios-chatbubbles" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 24,
    height: 26,
    color: 'white',
  },
});

export default FooterNav;