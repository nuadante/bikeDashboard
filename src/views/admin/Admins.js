import React, {useEffect, useState} from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import BlockAdmin from "../../components/admin/BlockAdmin";
import {getUsers} from "../../services/userServices";

const Admins = () => {
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    //getUsers().then(res=> setData(res))
  },[])
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Username</CTableHeaderCell>
          <CTableHeaderCell scope="col">Email</CTableHeaderCell>
          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          <CTableHeaderCell scope="col">Block / Active</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow active>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>moskbilisim</CTableDataCell>
          <CTableDataCell>info@moskbilisim.com</CTableDataCell>
          <CTableDataCell>Status</CTableDataCell>
          <CTableDataCell><BlockAdmin/></CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
};

export default Admins;
