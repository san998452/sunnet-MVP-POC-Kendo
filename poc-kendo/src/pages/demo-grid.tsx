
import { gql, useQuery } from "@apollo/client";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useEffect, useState } from "react";
import { orderBy, filterBy, process } from '@progress/kendo-data-query';
import { ListPersonDocument } from "../graphql-operations";

const DemoGrid = () => {
  
  
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [sort,setSort] = useState<any>([{ field: 'empId', dir: 'desc' }])
// import { useState } from "react";
// const GET_PERSON = gql`
//   {
//     listPerson {
//       personId
//       empId
//       firstName
//       lastName
//       title
//       workPhone
//       homePhone
//       email
//       location
//       supervisor
//       radioTruck
//       pagerNational
//       cellPhone
//       enabledFlag
//     }
//   }
// `;

// const DemoGrid = () => {
//   const { loading, error, data } = useQuery(GET_PERSON);
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)


 const pageChange = (event) => {
    setSkip(event.page.skip)
    setTake(event.page.take) 
 }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      {/* <Grid 
      style={{ height: '300px' }}
      data={orderBy(data.listPerson,sort)}
      sortable
      sort={sort}
      onSortChange={(e) => {
         setSort(e.sort)
      }}
      resizable
      reorderable */}
      <Grid
        style={{ height: "calc(100% - 62px)" }} 
        data={data.listPerson.slice(skip, take + skip)}
        skip={skip}
        take={take}
        sortable
        sort={sort}
        onSortChange={(e) => {
           setSort(e.sort)
        }}
        total={data.listPerson.length}
        pageable={true}
        onPageChange={pageChange}
        resizable
        reorderable 
      >
        <Column
          width="80px"
          field="empId"
          title="ID"
          // filterable={false}
          filter="numeric" 
          editable={false}
          minResizableWidth={60}
        />
        <Column field="firstName" title="First Name" filter="text" />
        <Column field="lastName" title="Last Name" />
        <Column field="title" title="Title" width="200px" />
        <Column field="workPhone" title="Work Phone" />
        <Column field="homePhone" title="Home Phone" />
        <Column field="email" title="Email" width="150px" />
        <Column field="location" title="Location" />
        <Column field="supervisor" title="Supervisor" />
        <Column field="cellPhone" title="Cell Phone" />
        <Column field="enabledFlag" title="Enabled Flag" />
      </Grid>
    </div>
  );
};

export default DemoGrid;

