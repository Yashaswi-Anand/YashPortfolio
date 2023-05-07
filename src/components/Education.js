import { CCard } from '@coreui/react'
import React from 'react'
import DataTable from 'react-data-table-component';
import customTableStyles from '../constants';

function Education() {
  const columns = [
    {
      name: 'Session',
      selector: row => row.year ? row.year : '-',
      sortable: true,
    },
    {
      name: 'Course',
      selector: row => row.course ? row.course : '-',
      sortable: true,
    },
    {
      name: 'Branch',
      selector: row => row.branch ? row.branch : '-',
      sortable: true,
    },
    {
      name: 'College/School',
      width: '18rem',
      selector: row => row.school ? row.school : '-',
      sortable: true,
    },
    {
      name: 'CGPA/Percentage',
      selector: row => row.marks ? row.marks : '-',
      sortable: true,
    },
  ];
  const data = [{ year: '2018-2022', course: "BTech", branch:'CSE', school: 'Motihari College Of Engineering, Motihari', marks: '8.7', address: 'address' },
  { year: '2015-2017', course: "12th", branch:'Science', school: 'Maharaja College, Ara', marks: '70.2%', address: 'address' },
  { year: '2014-2015', course: "10th", branch:'General', school: 'Gyan Bharti Education Complex, Patna', marks: '9.4', address: 'address' }]
  return (
    <div style={{margin: '10px'}}>
      <CCard>
        <DataTable
            pagination
            paginationRowsPerPageOptions={[1, 3, 5]}
            highlightOnHover
            dense
            theme="solarized"
            columns={columns}
            data={data}
            customStyles={customTableStyles}
        />
      </CCard>
    </div>
  )
}

export default Education