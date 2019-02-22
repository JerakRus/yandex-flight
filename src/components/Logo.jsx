import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Logo = () => <Link to='/'><Image src="/images/SVO_logo1.png" fluid /></Link>;

export default Logo;