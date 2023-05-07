import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const FlogModalComponent = ({
  content,
  buttonLabel,
  titleLabel,
  hasDefaultButton,
  cancelLabel,
  saveLabel,
  linkType,
  imageSrc,
  imageHeight,
  imageWidth,
  imageAlt,
  linkTitle,
  visibility
}) => {
  const [isOpen, setIsopen] = useState(false)

  const openModal = () => {
    if (isOpen) {
      setIsopen(false)
    } else {
      setIsopen(true)
    }
  }
  const closeButton = () => {
    setIsopen(false)
  }
  const closeWindow = (e) => {
    if (e.target === e.currentTarget) {
      setIsopen(false)
    }
  }

  useEffect(() => {
    console.log('visibility', visibility)
    if (visibility) {
      setIsopen(true)
    }
  }, [visibility])

  useEffect(() => {
    function handleEscapeKey (event) {
      if (event.code === 'Escape') {
        setIsopen(false)
      }
    }
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])

  const TypeOfLink = ({ linkType }) => {
    switch (linkType) {
      case 'link':
        return (
          <a href='#' title={linkTitle} onClick={openModal}>
            {buttonLabel}
          </a>
        )
      case 'image':
        return (
          <a href='#' title={linkTitle} height={imageHeight} width={imageWidth}>
            <img
              src={imageSrc}
              onClick={openModal}
              height={imageHeight}
              width={imageWidth}
              alt={imageAlt}
            />
          </a>
        )
      case 'button':
        return (
          <button
            title={linkTitle}
            onClick={() => {
              openModal()
            }}
          >
            {buttonLabel}
          </button>
        )
      default:
        return null
    }
  }

  const Title = ({ titleLabel }) => {
    return <h1>{titleLabel}</h1>
  }

  const DefaultButton = ({ DefaultButton }) => {
    if (hasDefaultButton) {
      return (
        <div className={styles.defaultButtonsContainer}>
          <button onClick={closeButton}>
            {cancelLabel ? cancelLabel : 'Cancel'}
          </button>
          <button className={styles.primary}>
            {saveLabel ? saveLabel : 'Save'}
          </button>
        </div>
      )
    } else {
      return null
    }
  }

  const customId = 'flogId-' + Math.round(Math.random() * 1000000000)

  const theModal = (
    <div className={styles.modalbuttonGlobal}>
      <TypeOfLink
        linkType={linkType}
        imageSrc={imageSrc}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
        imageAlt={imageAlt}
        linkTitle={linkTitle}
      />
      <div
        id={customId}
        className={
          isOpen
            ? ['flogmodal ' + styles.modal]
            : ['flogmodal ' + styles.modalClose]
        }
        onClick={(e) => closeWindow(e)}
      >
        <div className={styles.modalcontent}>
          <div className={styles.crossButtonContainer}>
            <button className={styles.crossButton} onClick={closeButton}>
              x
            </button>
          </div>
          {titleLabel ? <Title titleLabel={titleLabel} /> : null}
          <div className={styles.mainContent}>{content}</div>
          <DefaultButton />
        </div>
      </div>
    </div>
  )
  return theModal
}
