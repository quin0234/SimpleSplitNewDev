import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, TextInput } from 'react-native';
import { expenseTitleChanged, saveExpense } from '../../actions';
import { Container, Header, Left, Body, Right, Button, Text, Content, Card, Item, Icon, Title, Spinner, Input, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';


  class NewExpenseForm extends Component {
      
    onTitleChange(text){
        this.props.expenseTitleChanged(text)
    }


    onButtonPress(){
        const {expenseTitle} = this.props;
        this.props.saveExpense({ expenseTitle});
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
                                <Text>Save Expense</Text>
                            </Button>
        );
    }

        render(){
            return (
                <Container>
                <Header>
                <Left>
                  <Button transparent
                  onPress={Actions.newexpenseModal}>
                    <Text style={{fontSize:12}}>Back</Text>
                  </Button>
                </Left>
                <Body>
                  <Title>Expense Details</Title>
                </Body>
                <Right/>
              </Header>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20
            }}>
                <Content>
                    <Card style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 350,
                        height: 400,
                        padding: 20
                    }}>
                    <Item>
                    <Input
                        label="Title"
                        placeholder="Title"
                        onChangeText={this.onTitleChange.bind(this)}
                        value={this.props.expenseTitle}
                        />
                </Item>
                <Item>
                <Input
                    label="Description"
                    placeholder="Description"
                    multiline = {true}
                    numberOfLines={4}
                    maxLength = {155}
                    style={{height: 150, padding: 10}}
                    />
            </Item>
            <Item>
            <Text>TAGS GO HERE</Text>
            </Item>
            <Item>
            <Thumbnail large source={{uri: 'https://firebasestorage.googleapis.com/v0/b/simplesplit-5d7ab.appspot.com/o/IMG_20180314_082225632.jpg?alt=media&token=72a8518d-9124-4e2b-a538-f2587d8f936d'}} />
            </Item>
                <Item>
                        {this.renderButton()}
                            
                        </Item>
                    </Card>
                </Content>
                </View>
                </Container>
            )
        }
  }

  const mapStateToProps = ({ expense }) => {
    const {expenseTitle, error, loading } = expense;
  
    return {expenseTitle, error, loading};
  };
  export default connect(mapStateToProps, {expenseTitleChanged, saveExpense })(NewExpenseForm);