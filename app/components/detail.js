
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={style.header}>{'detail data:'}{this.props.data}</Text>
        <TouchableHighlight onPress={() => this.props.incDetail()}>
          <Text style={style.buttonText}>{'INC'}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.pop}>
          <Text style={style.buttonText}>{'gotoList'}</Text>
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
  },
  buttonText: {
    fontSize: 18,
  },
})
