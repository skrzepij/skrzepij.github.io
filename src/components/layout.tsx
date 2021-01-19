import React from "react"
import { graphql, useStaticQuery } from "gatsby"

type Props = {
  readonly children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          authorUrl
        }
      }
    }
  `)

  const { author, authorUrl } = data.site.siteMetadata

  return (
    <div className={"h-screen bg-black text-white"}>
      <main>{children}</main>
      <footer>
        Created by <a href={authorUrl} target="_blank">{author}</a>
      </footer>
    </div>
  )
}

export default Layout