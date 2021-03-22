
import { gql, useQuery } from "@apollo/client";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useEffect, useState } from "react";
import { orderBy, filterBy, process } from '@progress/kendo-data-query';
import { ListPersonDocument } from "../graphql-operations";

const DemoGrid = () => {
  
  
  const { loading, error, data } = useQuery(ListPersonDocument);
  const [sort,setSort] = useState<any>([{ field: 'empId', dir: 'desc' }])

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      <Grid 
      style={{ height: '300px' }}
      data={orderBy(data.listPerson,sort)}
      sortable
      sort={sort}
      onSortChange={(e) => {
         setSort(e.sort)
      }}
      resizable
      reorderable
      >
        <Column
          width="150"
          field="empId"
          title="ID"
          // filterable={false}
          filter="numeric" 
          editable={false}
        />
        <Column field="firstName" title="First Name" filter="text" />
        <Column field="lastName" title="Last Name" />
        <Column field="title" title="Title" />
        <Column field="homePhone" title="Home Phone" />
        <Column field="cellPhone" title="Cell Phone" />
        <Column field="email" title="Email" />

      </Grid>
    </div>
  );
};

export default DemoGrid;

