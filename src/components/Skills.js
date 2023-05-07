import React, { useEffect, useState } from 'react'
import HorizontalProgressBar from '../Widget/HorizontalProgressBar';
import VerticaleProgressBar from '../Widget/VerticaleProgressBar';
import { CContainer, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react';

function Skills() {
  const [java, setJava] = useState({ name: '', backgroundColor: '', score: 0 });
  const [javaScript, setJavaScript] = useState({ name: '', backgroundColor: '', score: 0 });
  const [go, setGo] = useState({ name: '', backgroundColor: '', score: 0 });
  const [kotlin, setKotlin] = useState({ name: '', backgroundColor: '', score: 0 });
  const [dart, setDart] = useState({ name: '', backgroundColor: '', score: 0 });
  const [flutter, setFlutter] = useState({ name: '', backgroundColor: '', score: 0 });
  const [html, setHtml] = useState({ name: '', backgroundColor: '', score: 0 });
  const [css, setCss] = useState({ name: '', backgroundColor: '', score: 0 });


  useEffect(() => {
    setJava({ name: 'Java', backgroundColor: 'red', score: 90 });
    setJavaScript({ name: 'JavaScript', backgroundColor: 'blue', score: 70 })
    setGo({ name: 'Go', backgroundColor: 'gray', score: 40 })
    setDart({ name: 'Dart', backgroundColor: 'green', score: 30 })
    setKotlin({ name: 'Kotlin', backgroundColor: 'aliceblue', score: 20 })
    setFlutter({ name: 'Flutter', backgroundColor: 'yellow', score: 89 })
    setHtml({ name: 'Html', backgroundColor: 'black', score: 70 })
    setCss({ name: 'CSS', backgroundColor: 'lightgreen', score: 90 })
  })


  return (
    <div style={{backgroundImage:'radial-gradient(aliceblue, lightgray)', height:'87.6vh'}}>
      <CContainer style={{ padding: '0px' }}>
        {/* First Part */}
        <div style={{ display: 'flex', height: '200px', justifyContent: 'space-between', padding: '0px' }}>
          <div style={{ width: '60%'}}>
            <div style={{marginTop:'10px'}}>
            <h4 style={{ textAlign: 'left', marginLeft: '10px' }}>Language</h4>
            <CTable style={{ margin: '10px' }}>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ width: '100px', textAlign: 'left' }} scope="row">{java.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none'><HorizontalProgressBar bgcolor={java.backgroundColor} completed={java.score} /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ width: '100px', textAlign: 'left' }} scope="row">{javaScript.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none'><HorizontalProgressBar bgcolor={javaScript.backgroundColor} completed={javaScript.score} /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ border: 'none', width: '100px', textAlign: 'left' }} scope="row">{go.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none' style={{ border: 'none' }}><HorizontalProgressBar bgcolor={go.backgroundColor} completed={go.score} /></CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
            </div>
          </div>

          <div style={{ borderLeft: '1px solid blue', width: '40%' }}>
            <h4 style={{ textAlign: 'left', marginLeft: '10px', marginTop:'10px' }}>Data Bases</h4>
            <div style={{ display: 'flex', marginLeft:'2%' }}>
              <div>
                <VerticaleProgressBar bgcolor={css.backgroundColor} completed={css.score} />
                <h6>SQL</h6>
              </div>
              <div style={{marginLeft: '5px'}}>
                <VerticaleProgressBar bgcolor={html.backgroundColor} completed={html.score} />
                <h6>SQL</h6>
              </div>

              <div style={{marginLeft: '5px'}}>
                <VerticaleProgressBar bgcolor={flutter.backgroundColor} completed={flutter.score} />
                <h6>SQL</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Second part */}
        <div style={{ display: 'flex', height: '200px', justifyContent: 'space-between', padding: '0px', marginTop:'20px' }}>

        <div style={{width: '30%',  marginLeft: '10px'  }}>
            <h4 style={{ textAlign: 'left', marginLeft: '10px' }}>Data Bases</h4>
            <div style={{ display: 'flex', marginLeft:'2%' }}>
              <div>
                <VerticaleProgressBar bgcolor={css.backgroundColor} completed={css.score} />
                <h6>SQL</h6>
              </div>
              <div style={{marginLeft: '5px'}}>
                <VerticaleProgressBar bgcolor={html.backgroundColor} completed={html.score} />
                <h6>SQL</h6>
              </div>

              <div style={{marginLeft: '5px'}}>
                <VerticaleProgressBar bgcolor={flutter.backgroundColor} completed={flutter.score} />
                <h6>SQL</h6>
              </div>
            </div>
          </div>

          <div style={{ borderLeft: '1px solid blue',  width: '60%' }}>
            <h4 style={{ textAlign: 'left', marginLeft: '10px' }}>Language</h4>
            <CTable style={{ margin: '10px' }}>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ width: '100px', textAlign: 'left' }} scope="row">{java.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none'><HorizontalProgressBar bgcolor={java.backgroundColor} completed={java.score} /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ width: '100px', textAlign: 'left' }} scope="row">{javaScript.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none'><HorizontalProgressBar bgcolor={javaScript.backgroundColor} completed={javaScript.score} /></CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell className='border-none' style={{ border: 'none', width: '100px', textAlign: 'left' }} scope="row">{go.name}</CTableHeaderCell>
                  <CTableDataCell className='border-none' style={{ border: 'none' }}><HorizontalProgressBar bgcolor={go.backgroundColor} completed={go.score} /></CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </div>

          
        </div>
      </CContainer>

    </div>
  )
}

export default Skills