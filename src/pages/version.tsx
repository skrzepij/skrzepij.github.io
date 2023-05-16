import React from 'react'

import pkg from '../../package.json'

const VersionPage = (): JSX.Element => {
  return (
    <div>
      Current version:{' '}
      <a href={`${pkg.repository.url}/releases/tag/v${pkg.version}`}>
        <strong>{pkg.version}</strong>
      </a>
      <p>
        Check all releases{' '}
        <a href={`${pkg.repository.url}/releases`} title="all releases">
          here
        </a>
      </p>
    </div>
  )
}

export default VersionPage
