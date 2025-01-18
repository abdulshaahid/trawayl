import React from 'react'
import UserAxiosInstance from '../AxiosInstances/UserAxiosInstance'
import URL from '../URL'
function Test() {

  UserAxiosInstance.get(`accounts/test/`

  ).then(()=>{

    alert('authenticated')
  })

  
  return (
    <div>


    </div>
  )
}

export default Test