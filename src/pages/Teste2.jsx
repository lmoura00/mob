import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Animated,
  PanResponder,
} from 'react-native';

const SwipeableCard = ({item, removeCard, swipedDirection}) => {
  const window = useWindowDimensions();
  const xPosition = useRef(new Animated.Value(0)).current;
  let cardOpacity = useRef(new Animated.Value(1)).current;
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder:
        (evt, gestureState) => false,
      onMoveShouldSetPanResponder:
        (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: 
        (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture:
        (evt, gestureState) => true,
      onPanResponderMove:
        (evt, gestureState) => {
          xPosition.setValue(gestureState.dx);
        },
      onPanResponderRelease: (evt, gestureState) => {
        if (
          gestureState.dx < window.width - 150 &&
          gestureState.dx > -window.width + 150
        ) {
          swipedDirection('--');
          Animated.spring(xPosition, {
            toValue: 0,
            speed: 5,
            bounciness: 10,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dx > window.width - 150) {
          Animated.parallel([
            Animated.timing(xPosition, {
              toValue: window.width,
              duration: 200,
              useNativeDriver: false,
            }),
            Animated.timing(cardOpacity, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false,
            }),
          ]).start(() => {
            swipedDirection('Direita');
            removeCard();
          });
        } else if (gestureState.dx < -window.width + 150) {
          Animated.parallel([
            Animated.timing(xPosition, {
              toValue: -window.width,
              duration: 200,
              useNativeDriver: false,
            }),
            Animated.timing(cardOpacity, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false,
            }),
          ]).start(() => {
            swipedDirection('Esquerda');
            removeCard();
          });
        }
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {
          backgroundColor: item.backgroundColor,
          opacity: cardOpacity,
          transform: [{translateX: xPosition}, {rotate: rotateCard}],
        },
      ]}>
      <Text style={styles.cardTitleStyle}> {item.cardTitle} </Text>
    </Animated.View>
  );
};

export function Teste2() {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const [
    cardArray,
    setCardArray
  ] = useState(CARDS_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');

  const removeCard = (id) => {
    cardArray.splice(
      cardArray.findIndex((item) => item.id == id),
      1,
    );
    setCardArray(cardArray);
    if (cardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.swipeText}>
        Direção do Último Cartão Deslizado Foi:{'\n'}
        {swipeDirection}
      </Text>
      <View style={styles.container}>
        {cardArray.map((item, index) => (
          <SwipeableCard
            key={index}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
          <Text style={{fontSize: 22, color: '#000'}}>
            Sem Mais Cards.
          </Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  cardStyle: {
    width: '75%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const CARDS_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    backgroundColor: '#FFC107',
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
  },
].reverse();