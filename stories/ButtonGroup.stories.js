import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../lib/elements/Button';
import ButtonGroup from '../lib/elements/ButtonGroup';

storiesOf('ButtonGroup', module)
    .add('default', () => (
        <ButtonGroup>
            <Button>Cancel</Button>
            <Button appearance="primary">Send</Button>
        </ButtonGroup>
    ))
    .add('flush', () => (
        <ButtonGroup flush>
            <Button>Bold</Button>
            <Button>Italics</Button>
            <Button>Underline</Button>
        </ButtonGroup>
    ));
