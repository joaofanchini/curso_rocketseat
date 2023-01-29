// noinspection JSUnusedGlobalSymbols

import 'styled-components';

import {defaultTheme} from '../theme/default';

type ThemeType = typeof defaultTheme;

// Sobrescrevendo tipagem de uma biblioteca.
// Neste caso fazemos com que as propriedades definidas pelo "defaultTheme" possam ser aplicadas
// Na ‘interface’ já existente do DefaultTheme na biblioteca styled-components
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}