export interface GatsbyDataInterface {
  site: {
    siteMetadata: GatsbySiteMetaDataInterface
  }
}

export interface GatsbySiteMetaDataInterface {
  title: string
  author: string
  authorUrl: string
  description: string
}
