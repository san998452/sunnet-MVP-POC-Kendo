import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { DropDownButton } from '@progress/kendo-react-buttons';
import { ComboBox, DropDownList } from '@progress/kendo-react-dropdowns';

const header = () =>
{
    const items=[{
        
            "roleGroupId": 190,
            "name": "Admin BPA",
            "fullName": "ADMIN_BPA",
            "displayName": "Admin BPA",
            "admin": true,
            "adminViewOnly": false
        },
        {
            "roleGroupId": 234,
            "name": "Admin PAC",
            "fullName": "ADMIN PAC",
            "displayName": "PAC Admin",
            "admin": true,
            "adminViewOnly": false
        },
        {
            "roleGroupId": 434,
            "name": "NVE Admin",
            "fullName": "NVE ADMIN_SNC",
            "displayName": "NVE Admin",
            "admin": true,
            "adminViewOnly": false    
    }]
    return(
        <div className="headerbar">
        I am header
        <DropDownButton text="User Settings" 
        items={items.map(item=>item.displayName)} primary={true} />
        <ComboBox data={items.map(item=>item.displayName)} onChange={(e)=>console.log(e.target.value)}/>
        <DropDownList data={items.map(item=>item.displayName)} defaultValue={"NVE Admin"} onChange={(e)=>console.log(e.target.value)}/>

        </div>
    )
}
export default header;