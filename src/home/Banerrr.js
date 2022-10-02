import React from 'react'
import { Alert } from 'react-bootstrap'

function Banerrr() {
  return (
    <>
    {[
      
     
     
      'danger',
    ].map((danger) => (
      <Alert key={danger} variant={danger} style={{marginTop:"100px", marginBottom:"100px"}}>
       FREE SHIPPING - TRANSPORTI GRATIS NE KOSOVE
      </Alert>
    ))}
  </>
  )
}

export default Banerrr