import React, {useState} from 'react';
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import {getUserBlock} from "../../services/userServices";



export  default function ResetPassword({id}) {
  const [visible, setVisible] = useState(false)
  const pass = ()=>{
 //   getUserBlock(id)
    setVisible(false)
  }
  return (
    <>
      <CButton color="secondary" onClick={() => setVisible(!visible)}>Reset Password</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Reset Password</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are You Sure?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton onClick={()=>pass()} color="primary">Reset Password</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
