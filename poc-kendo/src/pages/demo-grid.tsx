import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Grid,
  GridColumn as Column,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";

const GET_PERSON = gql`
  {
    listPerson {
      personId
      empId
      firstName
      lastName
      title
      workPhone
      homePhone
      email
      location
      supervisor
      radioTruck
      pagerNational
      cellPhone
      enabledFlag
    }
  }
`;

class DetailComponent extends GridDetailRow {
  render() {
    const dataItem = this.props.dataItem;
    return (
      <section>
        <p>Not data</p>
      </section>
    );
  }
}

const DemoGrid = () => {
  const { loading, error, data } = useQuery(GET_PERSON);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);

  const pageChange = (event) => {
    setSkip(event.page.skip);
    setTake(event.page.take);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const expandChange = (event) => {
    console.log("event ", event);
    // event.dataItem.expanded = !event.dataItem.expanded;
    // forceUpdate();
  };

  let _export = React.createRef();
  const exportFile = () => {
    _export.current.save();
  };

  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      <ExcelExport data={data.listPerson} ref={_export}>
        <Grid
          style={{ height: "calc(100% - 62px)" }}
          data={data.listPerson.slice(skip, take + skip)}
          skip={skip}
          take={take}
          total={data.listPerson.length}
          pageable={true}
          onPageChange={pageChange}
          resizable
          reorderable
          expandField="expanded"
          detail={DetailComponent}
          onExpandChange={expandChange}
        >
          <GridToolbar>
            <button
              title="Person_list"
              className="k-button k-primary"
              onClick={exportFile}
            >
              Export to Excel
            </button>
          </GridToolbar>
          <Column
            width="80px"
            field="empId"
            title="ID"
            filterable={false}
            editable={false}
            minResizableWidth={60}
          />
          <Column field="firstName" title="First Name" />
          <Column field="lastName" title="Last Name" />
          <Column field="title" title="Title" width="200px" />
          <Column field="workPhone" title="Work Phone" />
          <Column field="homePhone" title="Home Phone" />
          <Column field="email" title="Email" width="150px" />
          <Column field="location" title="Location" />
          <Column field="supervisor" title="Supervisor" />
          <Column field="cellPhone" title="Cell Phone" />
          <Column field="enabledFlag" title="Enabled Flag" />
          <Column field="pagerNational" title="Pager National" />
        </Grid>
      </ExcelExport>
    </div>
  );
};

export default DemoGrid;
