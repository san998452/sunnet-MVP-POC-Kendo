import { gql, useQuery } from "@apollo/client";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
const GET_PERSON = gql`
  {
    listPerson {
      personId
      empId
      firstName
      lastName
      title
    }
  }
`;

const DemoGrid = () => {
  const { loading, error, data } = useQuery(GET_PERSON);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="kendo-ui-grid">
      <h3>Personnel List</h3>
      <Grid data={data.listPerson}
      style={{ height: 'calc(100% - 62px)' }}>
        <Column
          width="80"
          field="empId"
          title="ID"
          filterable={false}
          editable={false}
        />
        <Column field="firstName" title="First Name" />
        <Column field="lastName" title="Last Name" />
        <Column field="title" title="Title" />
      </Grid>
    </div>
  );
};

export default DemoGrid;
