import { Html, Head, Main, NextScript } from 'next/document'

const RootStyle = {
  margin: '0',
  padding: '0',
  backgroundColor: 'Green',
  display: 'flex',
  flexFlow: 'column nowrap',
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
