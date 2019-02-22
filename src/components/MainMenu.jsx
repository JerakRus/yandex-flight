import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class MainMenu extends React.Component {

    handleSearch = (e) => {
        this.props.setSearchQuery(e.target.value);
    }

    render() {
        const activeItem  = this.props.location.pathname;
        return (
            <Menu pointing stackable color='blue'>
                <Menu.Item header>
                    Расписание полетов на Сегодня:
                </Menu.Item>
                <Link to="/departure">
                    <Menu.Item as='div' name='/departure'
                               active={activeItem === '/departure'}
                    >
                        Вылет
                    </Menu.Item>
                </Link>
                <Link to="/arrival">
                <Menu.Item as='div' name='/arrival'
                           active={activeItem === '/arrival'}
                >
                    Прибытие
                </Menu.Item>
                </Link>
                <Menu.Menu width={4} position='right'>

                        <Input icon='search'
                               placeholder='Поиск рейса...'
                               value={this.props.searchQuery}
                               onChange={this.handleSearch} />

                </Menu.Menu>
            </Menu>
        )
    }
}
