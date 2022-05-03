import {createGetInitialProps} from '@mantine/next';
import Document, {Head, Html, Main, NextScript} from 'next/document';

const getInitialProps = createGetInitialProps();

/**
 * Document Component
 */
export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  /**
   * Document Component
   * @return {ReactElement} - Document Component
   */
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
