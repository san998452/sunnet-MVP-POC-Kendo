import React, { useEffect, useRef, useState } from "react";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { CSVLink } from "react-csv";
import { orderBy, filterBy, process } from "@progress/kendo-data-query";
import AutoSizer from "react-virtualized-auto-sizer";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { GridPDFExport } from "@progress/kendo-react-pdf";

import { Notification, NotificationGroup } from '@progress/kendo-react-notification';
import { Fade } from '@progress/kendo-react-animation';

import { ListPersonDocument,CreatePersonMutationVariables,CreatePersonDocument } from "../graphql-operations";
import { ColumnMenu } from "../components/Admin/ListFilter/columnMenu";
import { CustomColumnMenu } from "../components/Admin/ListFilter/Show_Hide_columns";
import column from "../components/Admin/ListFilter/column";

import { EditCell } from "../components/Admin/ListFilter/EditCell";
import EditForm from "../components/Admin/ListFilter/EditForm";
import { HEADERS } from "../components/constants/Headers";
import Link from "next/link";

import { Button } from "@progress/kendo-react-buttons";
const GET_STATIONS = gql`
  query GetStationsByPersonId($personId: Int) {
    getStationsByPersonId(personId: $personId) {
      associateId
      group
      priority
      stationName
    }
  }
`;

const PageTemplate = (props) => (
  <div>
    <div
      style={{ position: "absolute", top: "2px", width: "100%", left: "40%" }}
    >
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Sunnet Personnel List
      </p>
    </div>
    <div style={{ position: "absolute", bottom: "10px", left: "20px" }}>
      <p style={{ fontSize: "15px" }}>
        Page {props.pageNum} of {props.totalPages}
      </p>
    </div>
  </div>
);

const DemoGrid = () => {
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [persons, setPersons] = useState([]);
  const [getStations, {  loading: stationLoading, data: stationData }] = useLazyQuery(GET_STATIONS);
  const [stations, setStations] = useState([]);
  const [sort, setSort] = useState<any>([{ field: "empId", dir: "desc" }]);

  const [filter, setFilter] = useState<any>(undefined);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [columns, setColumns] = useState<any>(column);
  const [search, setSearch] = useState("");
  const [isExporting, setExporting] = useState(false);
  const [editID, setEditID] = useState(null);
  const [editItem, setEditItem] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const [openAddPerson,setOpenAddPerson]=useState(false);
  const [createPerson] = useMutation<{
    createPerson: CreatePersonMutationVariables;
  }>(CreatePersonDocument, {
    refetchQueries: (mutationResults) => [{ query: ListPersonDocument }],
    onCompleted() {
    },
  });
  useEffect(() => {
    if (data) {
      let personData = data.listPerson.map((person) => ({
        ...person,
        expanded: false,
      }));
      setPersons(personData.slice(0));
    }
    if (stationData) {
      setStations(stationData.getStationsByPersonId);
    }
  }, [data, stationData]);

  const DetailComponent = (props) => {
    if(stationLoading) {
      return <p>Loading...</p>
    }
    // if (stations) {
    //   return (
    //     <div style={{ width: "100%" }}>
    //     {/* <div style={{ position: "absolute", width: "100%" }}> */}
    //       {/* <div className="k-loading-image" /> */}
    //       <p>No Association</p>
    //     {/* </div> */}
    //     </div>
    //   );
    // }
    return (
      stations.length > 0 ? (
        <Grid data={stations} style={{width: "600px"}} >
          <Column field="group" title="Group" width="200px" />
          <Column field="priority" title="Priority" width="200px" />
          <Column field="stationName" title="Station Name" width="200px" />
        </Grid>
      ) : (
        <p> No Assocations available </p>
      )
    )
  };

  const pageChange = (event) => {
    setSkip(event.page.skip);
    setTake(event.page.take);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  const expandChange = (event) => {
    getStations({ variables: { personId: Number(event.dataItem.personId) } });

    setPersons(
      persons.map((item) => {
        if (item.personId == event.dataItem.personId) {
          item.expanded = !item.expanded;
        }
        return item;
      })
    );
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
      data={persons.slice(skip, take + skip)}
      skip={skip}
      take={take}
      total={persons.length}
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
  const itemChange = (e) => {
    e.dataItem[e.field] = e.value;
    setPersons([...persons]);
    console.log("change person ...", persons);
  };

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
  };

  const handleCancelEdit = () => {
    setOpenForm(false);
    setOpenAddPerson(false);
  };

  const enterEdit = (item) => {
    setOpenForm(true);
    setEditItem(item);
  };

   const handleAddSubmit=(event:any)=>{
       console.log("event",event)
       let addPersonData={...event}
       createPerson({variables:{input:addPersonData}})
       setOpenAddPerson(false)
      //  alert("data added successfully.")
   }
  const EditCommandCell = (props) => {
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
  const handleEdit = () => {
    debugger;
    setPersons(persons.map((item) => Object.assign({ inEdit: true }, item)));
    console.log(persons);
  };

  const MyEditCommandCell = (props) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );
  return (
    <AutoSizer className="autoresizer-tbl">
      {({ height, width }) => {
        const pageSize = Math.floor((height - 375) / 48);
        //updating kendo pagesize
        //setTake(pageSize);
        return (
          <div className="kendo-ui-grid">
            <h3>Personnel List</h3>
            <Button primary={true} onClick={()=>setOpenAddPerson(true)}>Create Person</Button>
            {openAddPerson && <EditForm 
                  cancelEdit={handleCancelEdit}
                  onSubmit={handleAddSubmit}
                  item={undefined}
                  />}
            <ExcelExport data={persons} ref={_export}>
              <Grid
                style={{ height: "calc(100% - 62px)" }}
                data={filterBy(
                  orderBy(
                    persons.filter((item) => {
                      if (search.toLowerCase() !== null) {
                        return Object.keys(item).some(
                          (key) =>
                            typeof item[key] === "string" &&
                            item[key]
                              ?.toLowerCase()
                              .includes(search.toLowerCase())
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
                total={persons.length}
                pageable={{ pageSizes: [5, 10, 20, 50, 100, 500] }}
                onPageChange={pageChange}
                resizable
                reorderable
                detail={DetailComponent}
                expandField="expanded"
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
                editField="inEdit"
                onItemChange={itemChange}
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
                  <button title="Export to CSV" className="k-button k-primary">
                    <CSVLink
                      data={persons}
                      headers={HEADERS}
                      filename={"Person-list.csv"}
                    >
                      Export to CSV
                    </CSVLink>
                  </button>
                  <button>
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
                  <button
                    title="Export PDF"
                    className="k-button k-primary"
                    // onClick={exportPDF}
                    // disabled={isExporting}
                  >
                    <Link href="/react-gantt-chart">
                      Gantt Chart
                    </Link>
                  </button>
                  <button onClick={handleEdit}>Edit</button>
                </GridToolbar>
                <Column
                  cell={MyEditCommandCell}
                  width="80px"
                  filterable={false}
                />
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
                        columnMenu={ColumnMenu}
                      />
                    )
                )}
              </Grid>
              {openForm && (
                <EditForm
                  cancelEdit={handleCancelEdit}
                  onSubmit={handleSubmit}
                  item={editItem}
                />
              )}
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
