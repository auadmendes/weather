import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    
      title: string,
    
      colors: {
        primary: string,
        secondary: string
        text: string,
        background: string,
        gray_800: string,
        night: string,
        gray_400: string,
        list: string,
      },
    
    
  }
}