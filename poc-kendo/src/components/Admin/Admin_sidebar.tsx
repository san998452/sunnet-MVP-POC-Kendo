import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

function Admin_sidebar() {
  return (
    <div>
      <PanelBar style={{width:'20%'}}>
        <PanelBarItem title={"Access Control"}>
          <PanelBarItem title={"New Business Plan"} />
          <PanelBarItem title={"Sales Forecasts"}>
            <PanelBarItem title={"Q1 Forecast"} />
            <PanelBarItem title={"Q2 Forecast"} />
            <PanelBarItem title={"Q3 Forecast"} />
            <PanelBarItem title={"Q4 Forecast"} />
          </PanelBarItem>
          <PanelBarItem title={"Sales Reports"} />
        </PanelBarItem>
        <PanelBarItem title={"Station/Equipment"}>
          <PanelBarItem title={"Monday"} />
          <PanelBarItem title={"Tuesday"} />
          <PanelBarItem title={"Wednesday"} />
          <PanelBarItem title={"Thursday"} />
          <PanelBarItem title={"Friday"} />
        </PanelBarItem>
        
        <PanelBarItem title={"Pesonnel/User"}>
          <PanelBarItem title={"Monday"} />
          <PanelBarItem title={"Tuesday"} />
          <PanelBarItem title={"Wednesday"} />
          <PanelBarItem title={"Thursday"} />
          <PanelBarItem title={"Friday"} />
        </PanelBarItem>
        
        <PanelBarItem title={"Application Configration"}>
          <PanelBarItem title={"Monday"} />
          <PanelBarItem title={"Tuesday"} />
          <PanelBarItem title={"Wednesday"} />
          <PanelBarItem title={"Thursday"} />
          <PanelBarItem title={"Friday"} />
        </PanelBarItem>
        
        <PanelBarItem title={"System"}>
          <PanelBarItem title={"Monday"} />
          <PanelBarItem title={"Tuesday"} />
          <PanelBarItem title={"Wednesday"} />
          <PanelBarItem title={"Thursday"} />
          <PanelBarItem title={"Friday"} />
        </PanelBarItem>
        
        <PanelBarItem title={"Data Loading"}>
          <PanelBarItem title={"Monday"} />
          <PanelBarItem title={"Tuesday"} />
          <PanelBarItem title={"Wednesday"} />
          <PanelBarItem title={"Thursday"} />
          <PanelBarItem title={"Friday"} />
        </PanelBarItem>
        {/* <PanelBarItem title={"Second item"}>
          <PanelBarItem title={"Child item"} />
        </PanelBarItem> */}
      </PanelBar>
    </div>
  );
}

export default Admin_sidebar;
