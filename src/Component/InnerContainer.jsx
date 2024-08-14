import styles from "./innercontainer.module.css"
import React from 'react'

export default function InnerContainer({children}) {
  return (
    <div className={styles.innerContainer}>
      {children}
    </div>
  )
}
