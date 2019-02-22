import React from 'react';
import { Header, Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const TableSchedule = (props) => {
    const { schedule, event } = props;
    return (
         <Table celled padded selectable compact color='blue'>
             <Table.Header>
                 <Table.Row>
                     <Table.HeaderCell singleLine>Время вылета</Table.HeaderCell>
                     <Table.HeaderCell singleLine>Время прилета</Table.HeaderCell>
                     <Table.HeaderCell> Маршут </Table.HeaderCell>
                     <Table.HeaderCell> Номер рейса</Table.HeaderCell>
                     <Table.HeaderCell> Терминал </Table.HeaderCell>
                     <Table.HeaderCell> Подбробно </Table.HeaderCell>
                 </Table.Row>
             </Table.Header>
             <Table.Body >
             {schedule.map(flight => {
                 const dateArrival = flight.arrival ? new Date(flight.arrival) : null;
                 const dateDeparture = flight.departure ? new Date(flight.departure) : null;
                 return (

                         <Table.Row key={_.uniqueId()}>
                             <Table.Cell width={2}>
                                 <Header textAlign='center'>
                                     {dateDeparture ? dateDeparture.toLocaleString() : '-'}
                                 </Header>
                             </Table.Cell>
                             <Table.Cell width={2}>
                                 <Header textAlign='center'>
                                     {dateArrival ? dateArrival.toLocaleString() : '-'}
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

export default TableSchedule;