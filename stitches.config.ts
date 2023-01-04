import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        gray400: 'gainsboro',
        gray500: 'lightgray',
        braf: 'green',
        steam: './Utils/Logos/steam.svg',
        discord: './Utils/Logos/discord.svg'
      },
    },
    media: {
        'mobile': '(max-width: 680px)',
        'tablet': '(min-width: 681px)',
        'desktop': '(min-width: 1124px)',
        'fulldesktop': '(min-width: 1200px)',
    },
    utils: {
      marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
      marginY: (value: string) => ({ marginTop: value, marginBottom: value }),
    },
  });

export const injectGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  '@desktop': {
    body: {
      overflow: 'hidden'
    }
  }
});

injectGlobalStyles();