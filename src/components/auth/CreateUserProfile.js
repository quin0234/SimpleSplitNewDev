import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { displayNameChanged, connectEmailChanged, bankNameChanged, salaryChanged, saveUser } from '../../actions';
import { Content, Card, Text, Item, Icon, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

class CreateUserProfile extends Component {

    onDisplayNameChange(text){
        this.props.displayNameChanged(text)
    }
    onConnectEmailChange(text){
        this.props.connectEmailChanged(text)
    }
    onBankNameChange(text){
        this.props.bankNameChanged(text)
    }
    onSalaryChange(text){
        this.props.salaryChanged(text)
    }

    onButtonPress(){
        const { displayName, contactEmail, bank, salary} = this.props;
        this.props.saveUser({ displayName, contactEmail, bank, salary });
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
                <Text>Save Account</Text>
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
                                label="DisplayName"
                                placeholder="First Name"
                                onChangeText={this.onDisplayNameChange.bind(this)}
                                value={this.props.displayName}
                                />
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="LinkAccount"
                                placeholder="Link Account Email"
                                onChangeText={this.onConnectEmailChange.bind(this)}
                                value={this.props.contactEmail}
                                />
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Bank"
                                placeholder="Bank"
                                onChangeText={this.onBankNameChange.bind(this)}
                                value={this.props.bank}
                                />
                        </Item>
                        <Item style={{
                            marginTop:20}}>
                            <Input
                                label="Gross Income"
                                placeholder="Gross Income"
                                onChangeText={this.onSalaryChange.bind(this)}
                                value={this.props.salary}
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
    const {displayName, contactEmail, bank, salary, error, loading } = auth;
  
    return {displayName, contactEmail, bank, salary, error, loading};
  };
  export default connect(mapStateToProps, {displayNameChanged, connectEmailChanged, bankNameChanged, salaryChanged, saveUser })(CreateUserProfile);