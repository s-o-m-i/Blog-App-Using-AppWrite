import React from 'react'
import conf from './conf/conf'

const App = () => {
  console.log("env",conf.appwriteUrl)
  return (
    <div>App</div>
  )
}

export default App