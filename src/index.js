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
  linkTitle
}) => {
  const [isOpen, setOpen] = useState(false)

  const openModal = () => {
    if (isOpen) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }
  const closeButton = () => {
    setOpen(false)
  }
  const closeWidow = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
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

  const Title = ({ titleLabel }) => {
    return <h1>{titleLabel}</h1>
  }

  useEffect(() => {
    function handleEscapeKey (event) {
      if (event.code === 'Escape') {
        setOpen(false)
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
      default:
        return (
          <button title={linkTitle} onClick={openModal}>
            {buttonLabel}
          </button>
        )
    }
  }

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
        className={isOpen ? styles.modal : styles.modalClose}
        onClick={(e) => closeWidow(e)}
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
