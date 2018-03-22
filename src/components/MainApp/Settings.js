import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Content, List, ListItem, Text, Separator, Button,   } from 'native-base';

class Settings extends Component {
    render(){
        return(
            <Container>
            <Header style={{
              backgroundColor:'#7C6990'
          }}>
          <Left/>
              <Body>
                <Title style={{color:'#ffffff'}}>Account Settings</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <Separator bordered>
            <Text>Sharing Options</Text>
          </Separator>
          <ListItem>
          <Button transparent dark>
          <Text>Edit Profile</Text>
        </Button>
          </ListItem>
          <ListItem last>
          <Button transparent dark>
            <Text>Share Percentage</Text>
            </Button>
            <Text note>50%</Text>
          </ListItem>
          <Separator bordered>
          <Text>Payment</Text>
          </Separator>
          <ListItem last>
          <Button transparent dark>
            <Text>Payment Method</Text>
            </Button>
            <Text note>Scotiabank</Text>
          </ListItem>
          <Separator bordered>
            <Text>Account</Text>
          </Separator>
          <ListItem>
          <Button transparent dark>
            <Text>Change Password</Text>
            </Button>
          </ListItem>
          <ListItem last>
          <Button transparent dark>
            <Text>Log Out</Text>
            </Button>
          </ListItem>
            </Content>
            </Container>
        )
    }
}

export default Settings;