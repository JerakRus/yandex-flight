import React from 'react';
import { Header, Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const TableDelay = (props) => {
    const { schedule, event } = props;
    return (
        <Table celled padded selectable compact color='blue'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine textAlign='center'>{event === 'arrivalDelay' ?
                        'Должен был прилететь:' : 'Должен был вылететь:'}</Table.HeaderCell>
                    <Table.HeaderCell singleLine textAlign='center'>Задерживается на:</Table.HeaderCell>
                    <Table.HeaderCell> Маршут: </Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'> Номер рейса: </Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'> Терминал: </Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'> Подбробно: </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body >
                {schedule.map(flight => {
                    const time = event === 'arrivalDelay' ? new Date(flight.arrival) : new Date(flight.departure);
                    return (

                        <Table.Row key={_.uniqueId()}>
                            <Table.Cell width={2}>
                                <Header textAlign='center'>
                                    {time.toLocaleString()}
                                </Header>
                            </Table.Cell>
                            <Table.Cell width={2}>
                                <Header textAlign='center'>
                                    {flight.delay} минут
                                </Header>
                            </Table.Cell>
                            <Table.Cell width={7}>
                                <Header>
                                    {flight.thread.title}
                                </Header>
                            </Table.Cell>
                            <Table.Cell width={2}>
                                <Header textAlign='center'>
                                    {flight.thread.number}
                                </Header>
                            </Table.Cell>
                            <Table.Cell width={2} >
                                <Header textAlign='center'>
                                    {flight.terminal}
                                </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='center' >
                                <Link to={`/${event}/${flight.thread.uid}`}>
                                    <Icon name='arrow right' />
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    );
};

export default TableDelay;