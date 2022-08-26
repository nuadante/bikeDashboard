import React,{useEffect, useState}  from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {Link} from "react-router-dom";
import BlockRoute from "../../components/route/BlockRoute";
import {getRoutes} from "../../services/routeServices";

const Users = () => {
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    getRoutes().then(res=> setData(res))
  },[])

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Username</CTableHeaderCell>
          <CTableHeaderCell scope="col">Title</CTableHeaderCell>
          <CTableHeaderCell scope="col">Tags</CTableHeaderCell>
          <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
          <CTableHeaderCell scope="col">Ratings</CTableHeaderCell>
          <CTableHeaderCell scope="col">Block / Active</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>

        {data.map((res)=>
        <CTableRow active>
          <CTableHeaderCell scope="row">{res.id}</CTableHeaderCell>
          <CTableDataCell>{res.userId}</CTableDataCell>
          <CTableDataCell>{res.title}</CTableDataCell>
          <CTableDataCell>bursa, nilufer...</CTableDataCell>
          <CTableDataCell><Link to={`../route/routeComments/${res.id}`} ><CButton color="secondary">Comments</CButton ></Link></CTableDataCell>
          <CTableDataCell><Link to={`../route/routeRatings/${res.id}`} ><CButton color="primary">Ratings</CButton ></Link></CTableDataCell>
          <CTableDataCell><BlockRoute/></CTableDataCell>
        </CTableRow>
        )}
      </CTableBody>
    </CTable>
  )
};

export default Users;
