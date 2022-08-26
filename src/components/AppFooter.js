import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.moskbilisim.com" target="_blank" rel="noopener noreferrer">
          CyCamp
        </a>
        <span className="ms-1">&copy; 2022 moskbilisim.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
