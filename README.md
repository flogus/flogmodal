# flogmodal

> A react modal

[![NPM](https://img.shields.io/npm/v/flogmodal.svg)](https://www.npmjs.com/package/flogmodal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save flogmodal
```

## Usage

```jsx
import React, { Component } from 'react'

import { FlogModalComponent } from 'flogmodal'
import 'flogmodal/dist/index.css'

const App = () => {
  const [mymodal, setMymodal] = useState(false)

  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={() => {
          setMymodal(true)
        }}
      >
        your button
      </button>
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
```

## License

MIT © [flogus](https://github.com/flogus)
