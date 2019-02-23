import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleSizesInverted = () => (
    <Segment basic  color='blue'>
        <Loader active >Загружаем рейсы...</Loader>

        <Image src='/images/white-rectle.png' />
    </Segment>
);

export default LoaderExampleSizesInverted;