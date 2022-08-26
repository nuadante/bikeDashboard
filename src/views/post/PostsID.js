import React, {useEffect, useState} from 'react';
import {CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow} from "@coreui/react";
import {getPosts} from "../../services/postServices";
import {Link, useParams} from "react-router-dom";
import BlockPost from "../../components/post/BlockPost";


const Posts = () => {

  const [data, setData] = useState([{}]);

  let { id } = useParams();
  useEffect(()=>{
    getPosts().then(res=> setData(res.filter((posts)=> posts.userId == id)))
  })

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">User Id</CTableHeaderCell>
          <CTableHeaderCell scope="col">Title</CTableHeaderCell>
          <CTableHeaderCell scope="col">Description</CTableHeaderCell>
          <CTableHeaderCell scope="col">Likes</CTableHeaderCell>
          <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
          <CTableHeaderCell scope="col">Block / Active</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      {
        data.map((post) =>
        <CTableBody>
          <CTableRow active>
            <CTableHeaderCell scope="row">{post.id}</CTableHeaderCell>
            <CTableDataCell>{post.userId}</CTableDataCell>
            <CTableDataCell>{post.title}</CTableDataCell>
            <CTableDataCell>{post.description}</CTableDataCell>
            <CTableDataCell><Link to={`../post/postLikes/${post.id}`}><CButton color="primary">Likes</CButton ></Link></CTableDataCell>
            <CTableDataCell><Link to={`../post/postComments/${post.id}`}><CButton color="warning">Comments</CButton ></Link></CTableDataCell>
            <CTableDataCell><BlockPost/></CTableDataCell>
          </CTableRow>
        </CTableBody>)}
    </CTable>
  )
};

export default Posts;
