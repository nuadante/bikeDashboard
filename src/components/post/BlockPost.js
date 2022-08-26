import React, {useState} from 'react';
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import {getPostBlock} from "../../services/postServices";



export default function BlockPost({id,status}) {
  const [visible, setVisible] = useState(false)
const block = ()=>{
 getPostBlock(id).then(r => console.log(r))
  setVisible(false)
}
  return (
    <>
      <CButton color="danger" onClick={() => setVisible(!visible)}>Block / Active</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Block / Active</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are You Sure? {status}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton onClick={()=>block()} color="primary">Block / Active</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
