import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse,faListAlt,faUser,faChartLine,faPoll,faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
const leftbar = () =>
{
    return(
        <>
        <nav className="leftbar">
        <div className="logo">
            <a href="/">
            <FontAwesomeIcon icon={faWarehouse} size="2x" className="cl-pc-1"/><br />
            Dashboard
           </a>  
           </div>
            <div className="menu-item">
            <a href="/">
            <FontAwesomeIcon icon={faListAlt} size="2x" className="cl-pc-1"/><br />
            Logs
           </a>  
           </div>
           <div className="menu-item">
            <a href="/">
            <FontAwesomeIcon icon={faPoll} size="2x" className="cl-pc-1"/><br />
            Requests
           </a>  
           </div>
           <div className="menu-item">
            <a href="/">
            <FontAwesomeIcon icon={faTachometerAlt} size="2x" className="cl-pc-1"/><br />
            Events
           </a>  
           </div>
           <div className="menu-item">
            <a href="/">
            <FontAwesomeIcon icon={faChartLine} size="2x" className="cl-pc-1"/><br />
            Reports
           </a>  
           </div>
           <div className="menu-item">
            <a href="/">
            <FontAwesomeIcon icon={faUser} size="2x" className="cl-pc-1"/><br />
            Admin
           </a>  
           </div>

        </nav>

        </>
    )
}
export default leftbar;