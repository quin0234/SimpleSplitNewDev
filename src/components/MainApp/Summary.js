import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, DeckSwiper, List, ListItem, } from 'native-base';

import SummaryList from './SummaryComs/SummaryList';



class Summary extends Component {
    render(){
        return(
            <Container>
            <Header style={{
                backgroundColor:'#7C6990'
            }}>
              <Left/>
              <Body>
                <Title style={{color:'#ffffff'}}>Summary</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <SummaryList/>
            </Content>
            </Container>
        )
    }
}

export default Summary;