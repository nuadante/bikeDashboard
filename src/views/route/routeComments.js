import React, {useEffect, useState} from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {getUsers} from "../../services/userServices";
import BlockComment from "../../components/route/BlockComment";
import {useParams} from "react-router-dom";
import {getRouteCommentsByRouteId} from "../../services/routeServices";

const routeComments = () => {
  const [data, setData] = useState([{}]);
  let {id} = useParams();
  useEffect(()=>{

   getRouteCommentsByRouteId(id).then(res=> setData(res))
  },[])
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
          <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
          <CTableHeaderCell scope="col">Block / Active</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((res) =>
          <CTableRow active>
            <CTableHeaderCell scope="row">{res.id}</CTableHeaderCell>
            <CTableDataCell>{res.user_id}</CTableDataCell>
            <CTableDataCell>{res.description}</CTableDataCell>
            <CTableDataCell><BlockComment/></CTableDataCell>
          </CTableRow>
        )}
      </CTableBody>
    </CTable>
  )
};

export default routeComments;
