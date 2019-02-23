import React from 'react';
import {Button, Image, Segment, Card, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Flight = (props) => {
    const { flight } = props;
    const { event } = props.match.params;
    const time = (event === 'arrival') || (event === 'arrivalDelay') ?
        new Date(flight.arrival).toLocaleTimeString()
        : new Date(flight.departure).toLocaleTimeString();
    return (
        <Grid container>
            <Grid.Column width={4}>
                <Card>
                    <Image src='/images/Plane.jpeg' />
                    <Card.Content>
                        <Card.Header>Перевозчик: {flight.thread.carrier.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Модель самолета: {flight.thread.vehicle}</span>
                        </Card.Meta>
                        <Card.Description>Уникальный номер: {flight.thread.uid}</Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={12}>
                <Segment basic textAlign='right'>
                    <Link to={`/${props.match.params.event}`}>
                        <Button color='blue'>Назад</Button>
                    </Link>
                </Segment>
                      <Segment padded basic size='large'>
                          <h2>{flight.thread.title}</h2>
                          <h2>Номер рейса: {flight.thread.number}</h2>
                          <p>{event === 'arrival' ? `Прилетает сегодня в ${time}`
                                  : `Вылетает сегодня в ${time}`}</p>
                          <p>Дни полетов: {flight.days}</p>
                      </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default Flight;



