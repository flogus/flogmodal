import React, { useState } from 'react'

import { FlogModalComponent } from 'flogmodal'
import 'flogmodal/dist/index.css'

const App = () => {
  const [mymodal, setMymodal] = useState(false)

  return (
    <div className='grid'>
      <div className='doublecenter'>
        <button
          className='exampleButton'
          onClick={() => {
            setMymodal(true)
          }}
        >
          a button for modal 1
        </button>
        <FlogModalComponent
          visibility={mymodal}
          titleLabel='Oooh modal'
          hasDefaultButton='true'
          content='Content'
        />
      </div>
      <div>
        <h1 className='example'>FlogModalComponent</h1>
        <ul>
          <li>visibility=&#123;mymodal&#125;</li>
          <li>titleLabel='Oooh modal'</li>
          <li>hasDefaultButton='true'</li>
          <li>content='Content'</li>
        </ul>
      </div>

      <div className='doublecenter'>
        <FlogModalComponent
          linkType='link'
          buttonLabel='Open a great modal'
          titleLabel='Great modal'
          hasDefaultButton='true'
          content='Content'
          linkTitle='Open the modal with a link'
        />
      </div>
      <div>
        <h1 className='example'>FlogModalComponent</h1>
        <ul>
          <li>linkType='link'</li>
          <li>buttonLabel='Open a great modal' </li>
          <li>titleLabel='Great modal' hasDefaultButton='true' </li>
          <li>content='Content' </li>
          <li>linkTitle='Open the modal with a link'</li>
        </ul>
      </div>

      <div className='doublecenter'>
        <FlogModalComponent
          linkType='button'
          buttonLabel='Modal with no title'
          content='You can custon the content of the modal'
          linkTitle='Open the modal with a button'
        />
      </div>
      <div>
        <h1 className='example'>FlogModalComponent</h1>
        <ul>
          <li>linkType='button'</li>
          <li>buttonLabel='Modal with no title'</li>
          <li>content='You can custon the content of the modal'</li>
          <li>linkTitle='Open the modal with a button'</li>
        </ul>
      </div>

      <div className='doublecenter'>
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

      <div>
        <h1 className='example'>FlogModalComponent</h1>
        <ul>
          <li>linkType='image'</li>
          <li>buttonLabel='Custom buttons'</li>
          <li>titleLabel='Modal with custom buttons'</li>
          <li>hasDefaultButton='true'</li>
          <li>cancelLabel='Annuler'</li>
          <li>saveLabel='Envoyer'</li>
          <li>imageSrc='https://cdn.cdnlogo.com/logos/r/63/react.svg'</li>
          <li>imageHeight='100px'</li>
          <li>imageWidth='100px'</li>
          <li>imageAlt='React Logo'</li>
          <li>linkTitle='Open the modal with a image'</li>
        </ul>
      </div>
    </div>
  )
}

export default App
