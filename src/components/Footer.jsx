import React from 'react';
import { Segment, Icon } from 'semantic-ui-react'


const Footer = (siteColor) => (
    <div>
        <Segment vertical />
        <Segment vertical color='blue' textAlign='center'>
            <span>
                Данные предоставлены сервисом Яндекс.Расписания:
            </span>
            &nbsp;
            <a target='_blank' rel='noopener noreferrer' href='http://rasp.yandex.ru/'>http://rasp.yandex.ru/</a>
            &nbsp;
            <Icon name='hand point up outline'/>
        </Segment>
    </div>
);

export default Footer;