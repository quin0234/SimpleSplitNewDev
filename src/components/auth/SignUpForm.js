import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { emailChanged, passwordChanged, createUser } from '../../actions';
import { Content, Card, Text, Item, Icon, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

class SignUpForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email, password } = this.props;
        this.props.createUser({ email, password});
    }

    renderButton(){
        if (this.props.loading) {
            return  <Spinner color='green' />;
        }
        return (
            <Button style={{
                width:280,
                marginTop:20,
                marginBottom:20,
                backgroundColor:'#7C6990'
            }}
            full
            onPress={this.onButtonPress.bind(this)}>
                <Text>Create Account</Text>
            </Button>
        );
    }

    render(){
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 75,
                backgroundColor: '#239B97'
            }}>
                <Content>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 300,
                        padding: 20
                    }}>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Email"
                                placeholder="Email@email.com"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                                />
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Password"
                                placeholder="Password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                value={this.props.password}
                                />
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Password"
                                placeholder="Confirm Password"
                                />
                        </Item>
                       
                        <Item style={{
                            borderColor:"#ffffff"
                        }}>
                        {this.renderButton()}
                            
                            </Item>
                    </Card>
                </Content>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const {email, password, error, loading } = auth;
  
    return {email, password, error, loading};
  };
  export default connect(mapStateToProps, {emailChanged, passwordChanged, createUser })(SignUpForm);