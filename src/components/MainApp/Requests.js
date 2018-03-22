import React, { Component } from 'react';
import { Container, Content, Header, Title, Text, List, ListItem, Body, Card, Left, Right, Icon} from 'native-base';

class Requests extends Component {
    render(){
        return(
            <Container>
            <Header style={{
              backgroundColor:'#7C6990'
          }}>
          <Left/>
              <Body>
                <Title style={{color:'#ffffff'}}>Notications</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <Card>
            <List>
            <ListItem>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            <ListItem>
            <Body>
            <Text>Sankhadeep</Text>
            <Text note>Its time to build a difference . .</Text>
            </Body>
            </ListItem>
            </List>
            </Card>
            </Content>
            </Container>
        )
    }
}

export default Requests;