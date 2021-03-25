import { ColumnMenu } from "./columnMenu";

const columns = [
  {
      title: 'Emp ID',
      field: 'empId',
      show: true,
      filter: 'text',
      locked: true,
      width:"300px"
  },
  {
      title: 'First Name',
      field: 'firstName',
      show: true,
      filter: 'text',
      locked: true,
      columnMenu:{ColumnMenu},
      width:"300px"
  },
  {
      title: 'Last Name',
      field: 'lastName',
      show: true,
      filter: 'text',
      locked: true,
      width:"300px"
  },
  {
      title: 'Work Phone',
      field: 'workPhone',
      show: true,
      locked: false,
      filter: 'text',
      width:"300px"
  },
  {
      title: 'Home Phone',
      field: 'homePhone',
      show: true,
      locked: false,
      filter: 'text',
      width:"300px"
  },
  {
      title: 'Title',
      locked: false,
      field: 'title',
      show: true,
      filter: 'text',
      width:"300px"
  },
  {
      title: 'Email',
      field: 'email',
      locked: false,
      show: true,
      filter: 'text',
      width:"300px"
  }
];

export default columns;