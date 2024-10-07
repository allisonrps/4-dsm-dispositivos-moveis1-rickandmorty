import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

export const Container = styled(ImageBackground).attrs({
    source: require('../assets/rick-and-morty-background.jpg')
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #1c1c1c;
`;

export const Input = styled.TextInput`
    border-width: 2px;
    border-color: #39ff14;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 15px;
    width: 80%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7); 
    text-align: center;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #39ff14;
    border-radius: 25px;
    padding: 12px;
    width: 80%;
    align-items: center;
    margin: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.Text`
    color: #000000; 
    font-weight: bold;
    font-size: 16px;
    text-align: center; 
`;

export const Form = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #39ff14;
    border-radius: 100px;
    padding: 12px;
    width: 15%;
    align-items: center;
    justify-content: center;
    margin: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

export const List = styled.FlatList`
    width: 100%;
    text-align: center;
    margin-top: 20px;
`;

export const Card = styled.View`
    align-items: center;
    margin: 10px 20px;
    background: rgba(0, 0, 0, 0.7); 
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    width: 90%;
`;

export const CardContent = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export const Avatar = styled.Image`
    width: 90px;
    height: 120px;
    border-radius: 0px;
    background: #ffffff;
    margin-right: 20px;
`;

export const CardInfos = styled.View`
    width: 100%;
    justify-content: center;
    text-align: left;
`;

export const Name = styled.Text`
    font-size: 22px;
    color: yellow;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

export const Status = styled.Text`
    font-size: 16px;
    color: #39ff14;
    text-align: left; 
`;

export const LabelText = styled.Text`
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
`;

export const InfoText = styled.Text`
    font-size: 14px;
    color: #39ff14;
    text-align: left;

`;

export const CardButtons = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
`;

export const CardButton = styled(RectButton)`
    background: #39ff14;
    width: 45%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
`;

export const CardButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    text-transform: uppercase;
`;