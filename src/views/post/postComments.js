import React,{useEffect, useState} from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {useParams} from "react-router-dom";
import BlockComment from "../../components/post/BlockComment";
import {getPostComments} from "../../services/postServices";

const PostComments = () => {
  const [data, setData] = useState([{}]);


  let { id } = useParams()
  console.log(id);

  useEffect(()=>{
    getPostComments(id).then(res=> setData(res))

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
        {data.map((comment)=>
          <CTableRow active>
            <CTableHeaderCell scope="row">{comment.id}</CTableHeaderCell>
            <CTableDataCell>{comment.userId}</CTableDataCell>
            <CTableDataCell>{comment.description}</CTableDataCell>
            <CTableDataCell><BlockComment/></CTableDataCell>
          </CTableRow>
        )}
      </CTableBody>
    </CTable>
  )
};

export default PostComments;
