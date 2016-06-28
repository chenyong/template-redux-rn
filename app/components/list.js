
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={style.header}>{'data: '}{this.props.data}</Text>
        <TouchableHighlight onPress={()=> this.props.incList()}>
          <Text style={style.buttonText}>{'INC'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.detail}>
          <Text style={style.buttonText}>{'gotoDetail'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

let style = StyleSheet.create({
  header: {
    height: 40,
  },
  button: {
    fontSize: 18,
  },
  buttonText: {
    fontSize: 18,
  },
})
