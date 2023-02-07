// Importando a `const` do arquivo `theme` que acabamos de criar:
import theme from "assets/styles/theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
