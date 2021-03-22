import DemoGrid from './demo-grid';
import Leftbar from './leftbar';
import Header from './header';
import Footer from './footer';
const Index = () => {
  return(
    <>
     
      <div className="maincontainer">  

        <Leftbar />
        <div className="rightbar">
          <Header />
          <DemoGrid />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Index;