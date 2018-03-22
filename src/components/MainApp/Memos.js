import React, { Component } from 'react';
import { Container, Content, Card, Header, Title, Text, List, ListItem, Body, Left, Right, Icon} from 'native-base';


class Memos extends Component {
    render(){
        return(
            <Container>
            <Header style={{
              backgroundColor:'#7C6990'
          }}>
          <Left/>
              <Body>
                <Title style={{color:'#ffffff'}}>Memos</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <Card>
            <List>
            <ListItem icon>
            <Left>
            <Icon name="md-play" />
          </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </Body>
            <Right>
            <Icon name="md-more" />
            </Right>
            </ListItem>
           </List>
           </Card>
            </Content>
            </Container>
        )
    }
}

export default Memos;