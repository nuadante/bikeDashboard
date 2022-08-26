import React, {useEffect, useState} from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {getFollowers} from "../../services/userServices";
import {Link, useParams} from "react-router-dom";


const userFollowers = () => {
  const [data, setData] = useState([{}]);

  let { id } = useParams()

  useEffect(()=>{
    getFollowers(id).then(res=> setData(res))
  },[])

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Username</CTableHeaderCell>
          <CTableHeaderCell scope="col">Email</CTableHeaderCell>
          <CTableHeaderCell scope="col">Posts</CTableHeaderCell>
          <CTableHeaderCell scope="col">Followers</CTableHeaderCell>
          <CTableHeaderCell scope="col">Following</CTableHeaderCell>
          <CTableHeaderCell scope="col">Reset Password</CTableHeaderCell>
          <CTableHeaderCell scope="col">Block / Active</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>

        {data.map((res)=>
          <React.Fragment key={res.id }>
            <CTableRow active>
              <CTableHeaderCell scope="row">{res.id}</CTableHeaderCell>
              <CTableDataCell>{res.username}</CTableDataCell>
              <CTableDataCell>{res.email}</CTableDataCell>
              <CTableDataCell><Link to={`../post/posts/${res.id}`} ><CButton color="dark">Posts</CButton ></Link></CTableDataCell>
              <CTableDataCell><Link to={`../user/userFollowers/${res.id}`}><CButton color="primary">Followers</CButton ></Link></CTableDataCell>
              <CTableDataCell><Link to={`../user/userFollowing/${res.id}`}><CButton color="warning">Following</CButton ></Link></CTableDataCell>
              <CTableDataCell><CButton  color="secondary">Reset Password</CButton ></CTableDataCell>
              <CTableDataCell><CButton color="danger">Block / Active</CButton ></CTableDataCell>
            </CTableRow>
          </React.Fragment>
        )}
      </CTableBody>
    </CTable>
  )
};


export default userFollowers;
