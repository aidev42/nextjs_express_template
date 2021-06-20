import React from 'react'
import Layout from '../view/layout.jsx'

export default class extends React.Component {
  static async getInitialProps({ req, res }) {
    const locals = res.locals
    return {
      locals
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return <Layout>
      <h2> Welcome to the the default routing page </h2>
      <p style={{fontSize: "24px"}}>
        The route for it is not defined in the NextjsExpressRouter.
      </p>
      <p style={{fontSize: "24px"}}>
        However, there is a fallback route that defaults to nextjs's built-in routing: the file name is the page route.
      </p>
      <a style={{fontSize: "36px"}} href="/"> Go back </a>
    </Layout>
  }

}

