import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, resetPWEmail } from '../../actions';
import { Content, Card, Text, Item, Icon, Input, Button, Footer, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';


class ForgettenPassword extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onButtonPress(){
        const {email} = this.props;
        this.props.resetPWEmail({ email });
    }

    renderError(){
        if (this.props.error) {
            return(
                <Item>
                    <Text style={{fontSize: 20, alignSelf: 'center', color: 'red'}}>
                        {this.props.error}
                    </Text>
                </Item>
            );
        }
    }
    renderButton(){
        if (this.props.loading) {
            return  <Spinner color='green' />;
        }
        return (
            <Button 
                    style={{
                        width:280,
                        marginTop:20,
                        backgroundColor:'#7C6990'
                        }}
                            full 
                            onPress={this.onButtonPress.bind(this)}> 
                                <Text>Reset Password</Text>
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
                            borderColor:"#ffffff",
                            marginBottom:20
                        }}> 
                            <Text>
                                Forget your Password?
                            </Text>
                        </Item>
                        <Item style={{
                            borderColor:"#ffffff",
                        }}>
                            <Text>
                                Enter your registered Email and we will
                                send you a password reset. 
                            </Text>
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Email"
                                placeholder="Email"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}
                                />
                        </Item>
                        <Item style={{
                            borderColor:"#ffffff"
                        }}>
                        {this.renderError()}
                        </Item>
                        <Item style={{
                            borderColor:"#ffffff"
                        }}>
                        {this.renderButton()}
                        </Item>
                    </Card>
                </Content>
                <Footer style={{
                    backgroundColor: '#239B97',
                    borderColor: '#239B97'
                }}>
                <Item style={{
                    borderColor:'#239B97',
                    justifyContent:'center',
                    flex:1
                }}>
                <Button 
                transparent dark
                onPress={Actions.signUp}
                >
                    <Text>Don't have an account? Sign Up</Text>
                    </Button>
                    </Item>
                </Footer>
            </View>
        )
    }
}



const mapStateToProps = ({ auth }) => {
    const {email, error, loading } = auth;
  
    return {email, error, loading};
  };
  export default connect(mapStateToProps, { emailChanged, resetPWEmail })(ForgettenPassword);