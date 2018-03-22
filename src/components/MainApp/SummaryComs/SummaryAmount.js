import React, { Component} from 'react';
import { View } from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';


class SummaryAmount extends Component {
    render(){
        return (
            <View>
            <Card>
                <CardItem>
                    <Body>
                    <Text>
                    YOU OWE MONEY TOO
                     </Text>
                     <Text>
                    $250.00
                        </Text>
                     <Button transparent dark>
                     <Text>MAKE A PAYMENT</Text>
                     </Button>
                    </Body>
                    </CardItem>
                    </Card>
                    </View>
        )
    }
}

export default SummaryAmount;
