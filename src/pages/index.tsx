import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { GatsbyDataInterface } from '../api/gatsbyData'

type Props = {
  readonly data: GatsbyDataInterface
}

export const Index: React.FC<Props> = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <div>
        <p>{`${title} - ${description}`}</p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
