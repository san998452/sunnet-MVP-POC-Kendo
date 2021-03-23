import React from 'react'
import Admin_sidebar from '../../components/Admin/Admin_sidebar'
import Leftbar from '../leftbar'
import Header from '../header'
import Footer from '../footer'
function Admin() {
  return (
    <div className="maincontainer">  

        <Leftbar />
        <div className="rightbar">
          <Header />
      <Admin_sidebar/>
          <Footer />
        </div>
      </div>
   
  )
}

export default Admin
