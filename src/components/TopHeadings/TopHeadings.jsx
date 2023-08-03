import React from 'react'
import styles from './TopHeadings.module.scss'

function TopHeadings(props) {
    const {TopHComCLs , SubHeading , Heading , Para} = props
  return (
    <div className={`${styles['Top-Headings']} ${styles[TopHComCLs]}`}>
      {SubHeading ? (
        <h4>{SubHeading}</h4>
      ) : (
        ""
      )}
        <h1>{Heading}</h1>
        {Para ? (
            <p>{Para}</p>
        ) : 
        (
            ""
        )}
    </div>
  )
}

export default TopHeadings
