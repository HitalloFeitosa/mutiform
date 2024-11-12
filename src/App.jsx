import { useState } from 'react'
import FormDialog from './components/Dialog/Dialog';
import MultiFormContainer from './components/MultiFormContainer/MultiFormContainer';
function App() {
  return (
    <div style={{ backgroundColor: '#f4f4f4'}}>
      {/* <FormDialog open={true} /> */}
      <MultiFormContainer />
    </div>
  )
}

export default App
