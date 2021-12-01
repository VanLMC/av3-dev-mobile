import React, { useContext, useState, useEffect } from "react";

import { Container, Button, ButtonText, Message, MessagesContainer, MessageInput } from "./styles";
import moment from 'moment';
import firebaseApp from "../../services/firebase";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { UsuarioContext } from "../../contexts/user";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const { signOut, user } = useContext(UsuarioContext);
  useEffect(() => {

    const unsub = onSnapshot(
      query(collection(db, "mensagens"), where("lido", "!=", true)),
      (querySnapShot) => {
        const tmp = [];

        querySnapShot.forEach(async (document) => {
          tmp.push({
            id: document.id,
            ...document.data(),
          });
        });
        

        const sorted = tmp.sort(function(a,b){
          return b.date -a.date;
        });


        setMessages(sorted);
      }
    )

    return () => {
      unsub();
    };
  }, []);

  const db = getFirestore(firebaseApp);

  async function handleMessage() {
    if(!messageInput){return;}
    try {
      setMessageInput("");
      await addDoc(collection(db, "mensagens"), {
        lido: false,
        mensagem: messageInput,
        user: user.email,
        date: new Date()
      });
      
    } catch (err) {
      console.log("err", err);
    }
  }

  const [messageInput, setMessageInput] = useState("");
  return (
    <Container>

      <MessageInput
        
              onChangeText={setMessageInput}
              value={messageInput}
              placeholder="Digite aqui sua mensagem.."
              
      />
      

      <MessagesContainer>
        {messages.map((item) => (
          <Message key={item.id}>{item.user}:   {item.mensagem}</Message>
        ))}
      </MessagesContainer>
        <Button
          onPress={() => {
            handleMessage();
          }}
        >
        <ButtonText>Enviar Mensagem</ButtonText>

      </Button>

    </Container>
  );
};

export default Chat;
