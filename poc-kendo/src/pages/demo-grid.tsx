import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Grid,
  GridColumn as Column,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { orderBy, filterBy, process } from "@progress/kendo-data-query";
import { ListPersonDocument } from "../graphql-operations";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { ColumnMenu } from "../components/Admin/ListFilter/columnMenu";
import { CustomColumnMenu } from "../components/Admin/ListFilter/Show_Hide_columns";
import column from "../components/Admin/ListFilter/column";
import { info } from "node:console";
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
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [sort, setSort] = useState<any>([{ field: "empId", dir: "desc" }]);
  const [filter, setFilter] = useState<any>(undefined);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [columns, setColumns] = useState<any>(column);
  const [search, setSearch] = useState("");
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
  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      {/* {console.log("fiter...",filter)} */}

      {/* <button onClick={handleSearch}>Search</button> */}
      <ExcelExport data={data.listPerson} ref={_export}>
        <Grid
          style={{ height: "calc(100% - 62px)", width: "80%" }}
          // data={filterBy(orderBy(data.listPerson.filter(i=>{ i.personId && i.message.toLowerCase().includes(search.)}),sort),filter).slice(skip, take + skip)}
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
          take={take}
          total={data.listPerson.length}
          pageable={true}
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
          // filterOperators={{
          //   'text': [
          //       { text: 'grid.filterContainsOperator', operator: 'contains' }
          //   ],
          //   'numeric': [
          //       { text: 'grid.filterEqOperator', operator: 'eq' }
          //   ],
          //   'date': [
          //       { text: 'grid.filterEqOperator', operator: 'eq' }
          //   ],
          //   'boolean': [
          //       { text: 'grid.filterEqOperator', operator: 'eq' }
          //   ]
          // }}
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
              title="Person_list"
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
          <Column locked field="firstName" width="200px" title="First Name" filter={'text'} columnMenu={ColumnMenu}/>
          <Column  locked field="lastName" title="Last Name" width="200px" columnMenu={ColumnMenu}/>
          <Column field="title" title="Title" width="200px" />
          <Column field="workPhone" title="Work Phone" width="200px"/>
          <Column field="homePhone" title="Home Phone" width="200px"/>
          <Column field="email" title="Email" width="150px" />
          <Column field="location" title="Location" width="200px" filter={'numeric'}/>
          <Column field="supervisor" title="Supervisor" width="200px"/>
          <Column field="cellPhone" title="Cell Phone" width="200px" />
          <Column field="enabledFlag" title="Enabled Flag" width="200px" filter={'boolean'}/>
          <Column field="pagerNational" title="Pager National" width="200px"/> */}
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
                    // props =>{
                    // {console.log("props...",props)}
                    //  return   <CustomColumnMenu
                    //         // {...props}
                    //         columns={columns}
                    //         onColumnsSubmit={onColumnsSubmit}
                    //     />
                    // }
                  }
                />
              )
          )}
        </Grid>
      </ExcelExport>
    </div>
  );
};

export default DemoGrid;
