import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #333;
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const Button = styled.TouchableOpacity`
  height: 60px;
  background-color: #AE1B73;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`

export const MessageInput = styled.TextInput`
 
  background-color: white;
  width: 100%;
  padding: 10px;
`;

export const MessagesContainer = styled.ScrollView`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px;

`;
export const Message = styled.Text`
  color: #fff;
  font-size: 15px;
  padding: 6px;
`