import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Text, Content, Thumbnail, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';


  class NewExpenseSummary extends Component {
        render(){
            return (
                <Container>
                <Header>
                <Left>
                  <Button transparent
                  onPress={Actions.newexpenseModal}>
                    <Text>Back</Text>
                  </Button>
                </Left>
                <Body>
                  <Title>Summary</Title>
                </Body>
                <Right>
                  <Button transparent
                  onPress={Actions.newexpenseform}>
                  <Text>Accept</Text>
                  </Button>
                </Right>
              </Header>
                <Content>
                    <Text>Expense Summary</Text>
                </Content>
                </Container>
            )
        }
  }

 export default NewExpenseSummary;