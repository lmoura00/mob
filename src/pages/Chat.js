import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export function Chat() {
  const params = useRoute()
  const [messages, setMessages] = useState([]);
  const Auth = getAuth()
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text:"Olá, meu nome é " + params.params.name + '. E serei seu motorista. Essa carona vai partir de ' + params.params.partidaString + ' com destino ' + params.params.destinoString,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: params.params.name,
          avatar: params.params.image,
        },
      },
    ]),
    console.log(Auth.currentUser.displayName)
    console.log(messages)
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      options={{}}
      placeholder={'Digite aqui a sua mensagem'}
      showUserAvatar
      onSend={messages => onSend(messages) || console.log(messages)}
      user={{
        _id: 1,
        name:auth.currentUser.displayName,
        avatar: auth.currentUser.photoURL
      }}
    />
  )
}