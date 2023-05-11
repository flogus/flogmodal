# flogmodal

> A react modal

[![NPM](https://img.shields.io/npm/v/flogmodal.svg)](https://www.npmjs.com/package/flogmodal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save flogmodal
```

## Usage

### With the link between a button and the flogmodal

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
        visibility={mymodal}
        titleLabel='Oooh modal'
        hasDefaultButton='true'
        content='Content'
      />
    </div>
  )
}
```

### With the linkType (link, button or image)

```jsx
import React, { Component } from 'react'

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
```

## Parameters

| Attribut         | Values               | Default value | Mandatory | Description                                                                         |
| ---------------- | -------------------- | ------------- | --------- | ----------------------------------------------------------------------------------- |
| linkType         | image,link or button | none          | no        |                                                                                     |
| visibility       |                      | none          | no        | to be used when you want to link a another component like a button to the flogmodal |
| linkTitle        | String               | none          | no        | to be used with the `linkType=link`                                                 |
| buttonLabel      | String               | ""            | no        | to be used with the `linkType=button`                                               |
| titleLabel       | String               | ""            | no        | for all `linkType`                                                                  |
| hasDefaultButton | Boolean              |               |           | for all `linkType`                                                                  |
| cancelLabel      | String               | `Cancel`      | no        | for all `linkType`                                                                  |
| saveLabel        | String               | `Save`        | no        | for all `linkType`                                                                  |
| imageSrc         | String               | none          | no        | to be used with the `linkType=image`                                                |
| imageHeight      | String               | none          | no        | to be used with the `linkType=image`                                                |
| imageWidth       | String               | none          | no        | to be used with the `linkType=image`                                                |
| imageAlt         | String               | none          | no        | to be used with the `linkType=image`                                                |
| content          | String or html       | none          | no        | for all `linkType`                                                                  |

## License

MIT © [flogus](https://github.com/flogus)
