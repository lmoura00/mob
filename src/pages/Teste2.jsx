import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
 
export function Teste2() {
  const [showSquare, setShowSquare] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [showTriangle, setShowTriangle] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [showOval, setShowOval] = useState(false);
 
  const changeShape = (shape) => {
    setShowSquare(shape == 'Square');
    setShowCircle(shape == 'Circle');
    setShowTriangle(shape == 'Triangle');
    setShowRectangle(shape == 'Rectangle');
    setShowOval(shape == 'Oval');
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View
            style={
              showSquare ? styles.SquareShapeView : 
              showCircle ? styles.CircleShapeView : 
              showRectangle ? styles.RectangleShapeView : 
              showTriangle ? styles.TriangleShapeView : 
              showOval ? styles.OvalShapeView : ''
            }
          />
        </View>
        <View style={styles.separator}/>
        <Button title={"Quadrado"} onPress={() => changeShape('Square')} />
        <View style={styles.separator}/>
        <Button title={"Círculo"} onPress={() => changeShape('Circle')} />
        <View style={styles.separator}/>
        <Button title={"Triângulo"} onPress={() => changeShape('Triangle')} />
        <View style={styles.separator}/>
        <Button title={"Retângulo"} onPress={() => changeShape('Rectangle')} />
        <View style={styles.separator}/>
        <Button title={"Oval"} onPress={() => changeShape('Oval')} />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  separator: {
    marginVertical: 10,
  },
  SquareShapeView: {
    width: 100,
    height: 100,
    backgroundColor: '#312F92',
  },
  CircleShapeView: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#652D90',
  },
  TriangleShapeView: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#3AB54A',
  },
  RectangleShapeView: {
    width: 120 * 2,
    height: 120,
    backgroundColor: '#FDEE21',
  },
  OvalShapeView: {
    width: 100,
    height: 100,
    backgroundColor: '#F59120',
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
});