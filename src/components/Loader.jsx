import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleSizesInverted = () => (
    <Segment color='blue'>
        <Loader active >Загружаем рейсы...</Loader>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
);

export default LoaderExampleSizesInverted;