import React, { Component } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment';
import {
    Container,
    Card,
    Avatar,
    Name,
    Status,
    LabelText,
    InfoText,
} from "./styles";


export default class Character extends Component {

    render() {
        const { route } = this.props;
        const { character } = route.params;

        const formattedDate = moment(character.created).format("MMMM Do YYYY, h:mm:ss a");

        return(
            <Container style={{ justifyContent: 'top', paddingTop: 15 }}>
                <Card style={{ width: '90%' }}>
                    <Avatar source={{uri: character.image}} />
                    
                    <Name>{character.name}</Name>

                    <LabelText>Sexo:</LabelText>
                    <InfoText>{character.gender}</InfoText>

                    <LabelText>Criado em:</LabelText>
                    <InfoText>{formattedDate}</InfoText>

                    <Status>
                    <LabelText>Status: </LabelText>
                    <LabelText>
                        {character.status == 'Alive' ? <Icon name='check-box' size={12} color='#0f0' /> : (character.status == 'Dead' ? <Icon name='cancel' size={12} color='#f00' /> : <Icon name='circle' size={12} color='#808080' />)}
                        {character.status}
                    </LabelText>
                    </Status>
                    
                    <LabelText>Espécies:</LabelText>
                    <InfoText>{character.species}</InfoText>
                    <LabelText>Tipo:</LabelText>
                    <InfoText>{character.type}</InfoText>
                    <LabelText>Última localização:</LabelText>
                    <InfoText>{character.location}</InfoText>
                    <LabelText>Primeira aparição:</LabelText>
                    <InfoText>{character.episode}</InfoText>
                </Card>
            </Container>
        )
    };
};