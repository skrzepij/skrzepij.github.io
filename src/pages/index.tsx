import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { GatsbyDataInterface } from '../api/gatsbyData'
import { SEO } from '../components/seo/seo'

type Props = {
  readonly data: GatsbyDataInterface
}

export const Index = ({ data }: Props): JSX.Element => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Strona główna" />
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
