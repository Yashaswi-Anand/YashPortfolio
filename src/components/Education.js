import { CCard, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

function Education() {
  const data = [{ id: 1, name: "yash", email: 'email@com', phone: '123456', address: 'address' },
  { id: 2, name: "yash", email: 'email@com', phone: '123456', address: 'address' },
  { id: 3, name: "yash", email: 'email@com', phone: '123456', address: 'address' }]
  return (
    <div>
      <CCard className='m-a-20px b-a-1px'>
        <CTable
          align="middle"
          small
          hover
          className='m-a-0px'>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className='text-align-left' scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell className='b-l-1px text-align-left' scope="col">NAME</CTableHeaderCell>
              <CTableHeaderCell className='b-l-1px text-align-left' scope="col">EMAIL</CTableHeaderCell>
              <CTableHeaderCell className='b-l-1px text-align-left' scope="col">PHONE</CTableHeaderCell>
              <CTableHeaderCell className='b-l-1px text-align-left' scope="col">ADDRESS</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data && data.map((item, idx) => <CTableRow key={idx}>
              <CTableHeaderCell className='text-align-left' scope="row">{idx + 1}.</CTableHeaderCell>
              <CTableDataCell className='b-l-1px text-align-left'>{item.name}</CTableDataCell>
              <CTableDataCell className='b-l-1px text-align-left'>{item.email}</CTableDataCell>
              <CTableDataCell className='b-l-1px text-align-left'>{item.phone}</CTableDataCell>
              <CTableDataCell className='b-l-1px text-align-left'>{item.address}</CTableDataCell>
            </CTableRow>)}
          </CTableBody>
        </CTable>
      </CCard>
    </div>
  )
}

export default Education