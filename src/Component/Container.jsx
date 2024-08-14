import styles from "./container.module.css"
import React from 'react'

export default function Container({children}) {
  return (
    <div className={styles.parentContainer}>
      {children}
    </div>
  )
}
