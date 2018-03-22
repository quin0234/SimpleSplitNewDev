import React, { Component } from 'react';
import {View, FlatList, Text} from 'react-native';
import firebase from 'firebase';
import axios from 'axios';

class SummaryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
        }
      }
      componentWillMount() {
        const { currentUser } = firebase.auth();
        const itemsRef = firebase.database().ref(`/users/${currentUser.uid}/expenses`)
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].expenseTitle
            });
          }
          console.log(newState)
          this.setState({
            items: newState
          });
        });
      }

    render(){
        return (
        <View style={{flex: 1,
            paddingTop: 22,
        backgroundColor: '#ffffff'}}>
        <FlatList
            data = {this.state.items}
            renderItem={({item}) => <Text style={{padding: 10,
                fontSize: 18,
                height: 44}}
                key={item.key}>
                {item.title}
                </Text>
            }
        />
        </View>
            )
      }
}


export default SummaryList;