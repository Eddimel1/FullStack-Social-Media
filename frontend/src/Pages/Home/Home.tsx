import classes from './Home.module.scss'
import React from 'react'

export const Home = () => {
    console.log(process.env.REACT_APP_GRAPHQL_SERVER_URL)
  return (
    <div>
      <h1 className={classes.someclass}>Hello World!</h1>
  
    </div>
  )
}
