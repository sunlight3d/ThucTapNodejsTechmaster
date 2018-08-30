
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const PostListAdmin = (props) => {
  const columns= [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
    }
  ];

  const rows_rounded_btn = [
    {
      'id': 1,
      'first': <MDBBtn color="default" rounded size="sm">Button</MDBBtn>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <MDBBtn color="default" rounded size="sm">Button</MDBBtn>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <MDBBtn color="default" rounded size="sm">Button</MDBBtn>
    }
  ];

  return(
    <MDBTable btn>
      <MDBTableHead columns={columns} />
      <MDBTableBody rows={rows_rounded_btn} />
    </MDBTable>
  );
};

export default PostListAdmin;
