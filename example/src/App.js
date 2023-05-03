import React from 'react'

import { FlogModalComponent } from 'flogmodal'
import 'flogmodal/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <FlogModalComponent
        linkType='link'
        buttonLabel='Open a great modal'
        titleLabel='Great modal'
        hasDefaultButton='true'
        content='Content'
        linkTitle='Open the modal with a link'
      />
      <FlogModalComponent
        linkType='button'
        buttonLabel='Modal with no title'
        content='You can custon the content of the modal'
        linkTitle='Open the modal with a button'
      />
      <FlogModalComponent
        linkType='image'
        buttonLabel='Custom buttons'
        titleLabel='Modal with custom buttons'
        hasDefaultButton='true'
        cancelLabel='Annuler'
        saveLabel='Envoyer'
        imageSrc='https://cdn.cdnlogo.com/logos/r/63/react.svg'
        imageHeight='100px'
        imageWidth='100px'
        imageAlt='React Logo'
        linkTitle='Open the modal with a image'
      />
    </div>
  )
}

export default App
