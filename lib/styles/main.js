import { injectGlobal } from 'styled-components';

import { colorPrimitives } from './base/colors';
import { dimenPrimitives } from './base/dimen';
import { fontPrimitives } from './base/fonts';

const style = {
    colors: colorPrimitives,
    dimen: dimenPrimitives,
    fonts: fontPrimitives
};

// eslint-disable-next-line
injectGlobal`

`;

export default style;
