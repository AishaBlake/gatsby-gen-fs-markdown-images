/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: '5px',
      }}
    >
      <p>
        Written by <strong>Aisha</strong> who lives and works in Fan
        Srancisco building useful things.
        {` `}
        <a href={`https://twitter.com/aishablake`}>
          You should follow her on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
