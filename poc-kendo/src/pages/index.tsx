import DemoGrid from './demo-grid';
import Leftbar from './leftbar';
import Header from './header';
import Footer from './footer';
import DemoGridTest from './demo-grid-test';
const Index = () => {
  return(
    <>
     
      <div className="maincontainer">  

        <Leftbar />
        <div className="rightbar">
          <Header />
          <DemoGrid />
          {/* <DemoGridTest /> */}
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Index;