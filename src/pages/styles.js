import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

export const Container = styled(ImageBackground).attrs({
    source: require('../assets/rick-and-morty-background.jpg')
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #1c1c1c;
`;

export const Input = styled.TextInput`
    border-width: 2px;
    border-color: #39ff14; /* Verde neon */
    border-radius: 10px;
    padding: 5px;
    margin-vertical: 10px;
    width: 75%;
    color: #fff;
    background-color: #000000;
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 100px;
    padding: 10px;
    width: 80%;
    align-items: center;
    margin: 5px;
    text-align: center; 
`;

export const ButtonText = styled.Text`
    color: #39ff14; /* Verde neon */
    font-weight: bold;
    text-align: center; 
`;

export const Form = styled.View`
    flex-direction: row;
    border-bottom-width: 2px;
    border-color: #39ff14; /* Verde neon */
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 100px;
    padding: 10px;
    width: 12%;
    align-items: center;
    margin: 10px;
    justify-content: center;
    text-align: center;
`;

export const List = styled.FlatList`
    width: 100%;
    text-align: center;
`;

export const Card = styled.View`
    align-items: center;
    margin: 10px 20px;
    background: #000000;
    opacity: 0.8;
    padding: 15px;
    border-radius: 30px;
    text-align: center;
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export const Avatar = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    background: #ffffff;
    text-align: center; 
`;

export const CardInfos = styled.View`
    margin-top: 10px;
    width: 100%;
    align-items: flex-start;
    padding-left: 20px;
    text-align: center;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: yellow;
    font-weight: bold;
    margin-top: 2px;
    text-align: center;
    text-transform: uppercase;
`;

export const Status = styled.Text`
    text-transform: uppercase;
    font-size: 14px;
    color: #39ff14;
    text-align: center; 
`;

export const LabelText = styled.Text`
    text-transform: uppercase;
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    text-align: center; 
`;

export const InfoText = styled.Text`
    text-transform: uppercase;
    font-size: 14px;

    color: #39ff14;
    text-align: center;
`;

export const CardButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    text-align: center;
`;

export const CardButton = styled(RectButton)`
    margin-top: 10px;
    background: #000000;
    width: 45%;
    justify-content: center;
    align-items: center;
    height: 25px;
    border-radius: 10px;
    text-align: center; 
`;

export const CardButtonText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center; 
`;
