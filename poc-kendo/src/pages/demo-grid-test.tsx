import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Grid,
  GridColumn as Column,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { orderBy, filterBy, process } from "@progress/kendo-data-query";
import { ListPersonDocument } from "../graphql-operations";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { GridPDFExport } from "@progress/kendo-react-pdf";

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

const DemoGridTest = () => {
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [sort, setSort] = useState<any>([{ field: "empId", dir: "desc" }]);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [isExporting, setExporting] = useState(false);
  // const [gridPdfExport, setGridPdfExport] = useState({})
//   let _gridPDFExport = useRef(null);

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

  const pdfExportDone = () => {
    setExporting(false);
  };

  let _gridPDFExport = React.createRef();
  const exportPDF = () => {
    // Simulate a response from a web request.
    console.log('pdf...', _gridPDFExport)
    setTimeout(() => {
        // let _gridPDFExport = React.createRef()
        if(_gridPDFExport.current) {
            _gridPDFExport.current.save(data.listPerson, pdfExportDone);
        }
    }, 250);
    setExporting(true);
  };

//   useEffect(() => {

//   }, [_gridPDFExport])

  const grid = (
    <Grid
      style={{ height: "calc(100% - 62px)" }}
      data={data.listPerson.slice(skip, take + skip)}
      skip={skip}
      take={take}
      total={data.listPerson.length}
    >
        <GridToolbar>
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={exportPDF}
            //   disabled={isExporting}
            >
              Export PDF
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
  );

  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      {grid}
      <GridPDFExport
        ref={_gridPDFExport}
        margin="1cm"
      >
        {grid}
      </GridPDFExport>
    </div>
  );
};

export default DemoGridTest;
