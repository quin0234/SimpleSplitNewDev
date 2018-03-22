import React, { Component} from 'react';
import { Text, Card, CardItem} from 'native-base';

const ListItem = ({ expense }) => {
  const { expenseTitle } = expense

  return (
    <Card>
      <CardItem>
        <Text>
          {expenseTitle}
        </Text>
      </CardItem>
    </Card>
  )
}
  


export default ListItem;