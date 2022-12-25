import { Html, Head, Main, NextScript } from 'next/document'

const RootStyle = {
  '@import': '../Utils/Fonts/Roboto.css',
  margin: '0',
  padding: '0',
  backgroundColor: 'Green',
  display: 'flex',
  flexFlow: 'column nowrap',
  color: '#FFF',
  fontFamily: 'Roboto, sans-serif'
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={RootStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
