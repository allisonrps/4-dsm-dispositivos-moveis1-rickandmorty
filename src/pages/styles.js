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
    padding: 7px;
    margin-vertical: 10px;
    width: 80%;
    color: #fff;
    background-color: #333;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Button = styled.TouchableOpacity`
    background-color: #444;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    align-items: center;
    margin: 5px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const ButtonText = styled.Text`
    color: #39ff14; /* Verde neon */
    font-weight: bold;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Form = styled.View`
    flex-direction: row;
    border-bottom-width: 2px;
    border-color: #39ff14; /* Verde neon */
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #444;
    border-radius: 10px;
    padding: 10px;
    width: 12%;
    align-items: center;
    margin: 10px;
    justify-content: center;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const List = styled.FlatList`
    width: 100%;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Card = styled.View`
    align-items: center;
    margin: 10px 20px;
    background: #333;
    padding: 10px;
    border-radius: 10px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Avatar = styled.Image`
    width: 94px;
    height: 94px;
    border-radius: 32px;
    background: #666;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const CardInfos = styled.View`
    margin-top: 10px;
    width: 100%;
    align-items: flex-start;
    padding-left: 20px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const Status = styled.Text`
    font-size: 13px;
    color: #39ff14; /* Verde neon */
    margin-top: 4px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const LabelText = styled.Text`
    font-size: 13px;
    color: #fff;
    font-weight: bold;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const InfoText = styled.Text`
    font-size: 13px;
    color: #39ff14; /* Verde neon */
    margin-top: 4px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const CardButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const CardButton = styled(RectButton)`
    margin-top: 10px;
    background: #444;
    width: 47%;
    justify-content: center;
    align-items: center;
    height: 36px;
    border-radius: 10px;
    text-align: center; /* Centraliza o texto e o placeholder */
`;

export const CardButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #39ff14; /* Verde neon */
    text-transform: uppercase;
    text-align: center; /* Centraliza o texto e o placeholder */
`;
