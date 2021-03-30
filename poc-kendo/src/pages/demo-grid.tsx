import React, { useRef, useState } from "react";
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
import { ColumnMenu } from "../components/Admin/ListFilter/columnMenu";
import { CustomColumnMenu } from "../components/Admin/ListFilter/Show_Hide_columns";
import column from "../components/Admin/ListFilter/column";
import { info } from "node:console";

import AutoSizer from 'react-virtualized-auto-sizer'; 
import { EditCell } from "../components/Admin/ListFilter/EditCell";
import EditForm from "../components/Admin/ListFilter/EditForm";

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

const PageTemplate = (props) => (
  <div>
    <div style={{position: 'absolute', top: "10px", width: "100%", left: "50%" }}>
      <b>Sunnet Person List</b>
    </div>
    <div style={{position: "absolute", bottom: "10px", left: "10px"}}>
      Page {props.pageNum} of {props.totalPages}
    </div>
  </div>
);

const DemoGrid = () => {
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [sort, setSort] = useState<any>([{ field: "empId", dir: "desc" }]);
  const [filter, setFilter] = useState<any>(undefined);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [columns, setColumns] = useState<any>(column);
  const [search, setSearch] = useState("");
  const [isExporting, setExporting] = useState(false);
  const [editID,setEditID]=useState(null)
  const [editItem,setEditItem ]=useState({})
  const [openForm, setOpenForm] = useState(false)
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

  const onColumnsSubmit = (columnsState: any) => {
    setColumns(columnsState);
  };
  let _gridPDFExport = React.createRef();
  const exportPDF = () => {
    // Simulate a response from a web request.
    setTimeout(() => {
      if (_gridPDFExport.current) {
        // _gridPDFExport.current.save(data.listPerson);
        _gridPDFExport.current.save();
      }
    }, 500);
    setExporting(true);
  };

  const grid = (
    <Grid
      // style={{ height: "calc(100% - 62px)" }}
      data={data.listPerson.slice(skip, take + skip)}
      skip={skip}
      take={take}
      total={data.listPerson.length}
    >
      <Column field="empId" title="ID" />
      <Column field="firstName" title="First Name" />
      <Column field="lastName" title="Last Name" />
      <Column field="title" title="Title" />
      <Column field="workPhone" title="Work Phone" />
      <Column field="homePhone" title="Home Phone" />
      <Column field="email" title="Email" />
      {/* <Column field="location" title="Location" />
      <Column field="supervisor" title="Supervisor" />
      <Column field="cellPhone" title="Cell Phone" />
      <Column field="enabledFlag" title="Enabled Flag" />
      <Column field="pagerNational" title="Pager National" /> */}
    </Grid>
  );
//   const rowClick = (event) => {
//     setEditID( event.dataItem.ProductID)
// };

// var editField = "inEdit";
// const CommandCell = props => (
//   <EditCell
//       {...props}
//       edit={enterEdit}
//       // remove={remove}
//       // add={this.add}
//       // discard={this.discard}
//       // update={this.update}
//       // cancel={this.cancel}
//       editField={editField}
//   />
// );
//  const itemChange = (event) => {
//   const inEditID = event.dataItem.ProductID;
//   const data1 = data.listPerson?.map(item =>
//       item.personId === inEditID ? {...item, [event.field]: event.value} : item
//   );
//   console.log("edited...data",data1)
//   // this.setState({ data });
// };

// const enterEdit = (dataItem) => {
//  data.listPerson?.map(item =>
//           item.personId === dataItem.perdonId ?
//           { ...item, inEdit: true } : item
//       )
//       // console.log("info....",info)
// }

//  const closeEdit = (event) => {
//   if (event.target === event.currentTarget) {
//        setEditID( null );
//   }
// };
const handleSubmit = (event) => {
  // this.setState({
  //     data: this.state.data.map(item => {
  //         if (event.ProductID === item.ProductID) {
  //             item = { ...event };
  //         }
  //         return item;
  //     }),
  //     openForm: false
  // });
}


const handleCancelEdit = () => {
   setOpenForm( false)
}

const enterEdit = item => {
  // this.setState({
      setOpenForm( true)
      setEditItem( item)
      console.log("Edit items...",editItem)
  // });
}

const EditCommandCell = props => {
  return (
      <td>
          <button
              className="k-button k-primary"
              onClick={() => props.enterEdit(props.dataItem)}
          >
              Edit
    </button>
      </td>
  );
};
const MyEditCommandCell = props => (
  <EditCommandCell {...props} enterEdit={enterEdit} />
);
  return (
    <AutoSizer className="autoresizer-tbl">
    {({ height, width }) => {
        console.log(`Height: ${height} | Width: ${width}`);
        const pageSize = Math.floor((height - 375) / 48);
        console.log(`Page Size: ${pageSize}`);
        //updating kendo pagesize
        setTake(pageSize);
        return(

    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      {/* {console.log("fiter...",filter)} */}

      {/* <button onClick={handleSearch}>Search</button> */}
      <ExcelExport data={data.listPerson} ref={_export}>
        <Grid
          style={{ height: "calc(100% - 62px)" }}
          data={filterBy(
            orderBy(
              data.listPerson.filter((item) => {
                if (search.toLowerCase() !== null) {
                  return Object.keys(item).some((key) =>
                    item[key]?.toLowerCase().includes(search.toLowerCase())
                  );
                } else {
                  return item;
                }
              }),
              sort
            ),
            filter
          ).slice(skip, take + skip)}
          skip={skip}
          take={pageSize}
          total={data.listPerson.length}
          pageable={{ pageSizes: [5, 10, 20, 50, 100, 500] }}
          onPageChange={pageChange}
          resizable
          reorderable
          expandField="expanded"
          detail={DetailComponent}
          onExpandChange={expandChange}
          sortable
          sort={sort}
          onSortChange={(e) => {
            setSort(e.sort);
          }}
          filterable
          filter={filter}
          onFilterChange={(e) => {
            setFilter(e.filter);
          }}
        >
          <GridToolbar>
            <input
              name="search"
              value={search}
              placeholder="search...."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              title="Export to Excel"
              className="k-button k-primary"
              onClick={exportFile}
            >
              Export to Excel
            </button>
            
            <button >
              <CustomColumnMenu
                // {...props}
                columns={columns}
                onColumnsSubmit={onColumnsSubmit}
              />
            </button>
            
            <button
              title="Export PDF"
              className="k-button k-primary"
              onClick={exportPDF}
              // disabled={isExporting}
            >
              Export PDF
            </button>
          </GridToolbar>
          {/* <Column
            width="80px"
            field="empId"
            title="ID"
            filterable={false}
            editable={false}
            locked
            minResizableWidth={60}
          />
          <Column
            locked
            field="firstName"
            width="200px"
            title="First Name"
            filter={"text"}
            columnMenu={ColumnMenu}
          />
          <Column
            locked
            field="lastName"
            title="Last Name"
            width="200px"
            columnMenu={ColumnMenu}
          />
          <Column field="title" title="Title" width="200px" />
          <Column field="workPhone" title="Work Phone" width="200px" />
          <Column field="homePhone" title="Home Phone" width="200px" />
          <Column field="email" title="Email" width="150px" />
          <Column
            field="location"
            title="Location"
            width="200px"
            filter={"numeric"}
          />
          <Column field="supervisor" title="Supervisor" width="200px" />
          <Column field="cellPhone" title="Cell Phone" width="200px" />
          <Column field="enabledFlag" title="Enabled Flag" width="200px" filter={'boolean'}/>
          <Column field="pagerNational" title="Pager National" width="200px"/> */}
          <Column cell={MyEditCommandCell} width="80px" filterable={false} />
          {columns.map(
            (column, idx) =>
              column.show && (
                <Column
                  key={idx}
                  field={column.field}
                  title={column.title}
                  filter={column.filter}
                  locked={column.locked}
                  width={column.width}
                  columnMenu={
                    ColumnMenu
                  }
                />
              )
          )}

        </Grid>
        {/* {openForm && <EditForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} />} */}
      </ExcelExport>
      <GridPDFExport
        pageTemplate={PageTemplate}
        paperSize="A4"
        scale={0.5}
        ref={_gridPDFExport}
        margin="1cm"
      >
        {grid}
      </GridPDFExport>
    </div>
      );
    }}
    </AutoSizer>
  );
};

export default DemoGrid;
