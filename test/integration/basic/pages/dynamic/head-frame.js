import React from 'react'
import Head from 'next/head'
import Frame, { FrameContextConsumer } from 'react-frame-component'

export default props => (
  <div id="head-frame">
    <Frame>
      <FrameContextConsumer>
        {({ document }) => (
          <>
            <Head document={document}>
              <meta name="iframe" content="success" />
            </Head>
            <h1>Hello</h1>
          </>
        )}
      </FrameContextConsumer>
    </Frame>
    <Head>
      <meta name="parent-frame" content="success" />
    </Head>
  </div>
)
