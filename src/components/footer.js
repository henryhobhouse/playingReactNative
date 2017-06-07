import React from 'react';
import { Text, View } from 'react-native';

const Footer = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Footer;
