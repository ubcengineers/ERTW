import { injectGlobal } from 'styled-components';

const fontPrimitives = {
    copyFont: `'Nunito', sans-serif`,
    headerFont: `'Fjalla One', sans-serif`
};

// eslint-disable-next-line
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Fjalla+One|Nunito:300,400,700');
`;

export { fontPrimitives };

