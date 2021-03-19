import DemoGrid from './demo-grid';
import Leftbar from './leftbar';
import Header from './header';
import Footer from './footer';
const Index = () => {
  return(
    <>
      <Header />
      <div className="maincontainer">      
        <Leftbar />
        <div className="rightbar">
          <DemoGrid />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Index;