import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../lib/elements/Button';

storiesOf('Button', module)
    .add('default', () => <Button>Hello Button</Button>)
    .add('primary', () => <Button appearance="primary">Hello Button</Button>);
