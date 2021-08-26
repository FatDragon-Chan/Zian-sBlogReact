import { useDarkMode } from 'next-dark-mode'
import React, { ReactElement, Fragment } from 'react'
import styles from './ThemeToggle.module.scss'
import Mask from '../Mask/Mask'
export interface ThemeToggleProps {
  handleClose: () => void
  visible: boolean
}

export default function ThemeToggle(props: ThemeToggleProps): ReactElement {
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode()

  const toggleMode = (text: string): void => {
    if (text === 'Auto') switchToAutoMode()
    if (text === 'Dark') switchToDarkMode()
    if (text === 'Light') switchToLightMode()
  }

  const findActive = (text: string): boolean => {
    if (autoModeActive) return text === 'auto'
    else if (darkModeActive) return text === 'dark'
    else return text === 'light'
  }

  return (
    <Mask visible={props.visible}>
      <div>
        <div className={styles.themeToggleClose} onClick={props.handleClose}>
          <svg
            className={styles.svgIcon}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
          >
            <path
              className={styles.svgPath}
              d="M512 451.67l97.835-97.835a42.667 42.667 0 0 1 60.33 60.33l-256 256a42.667 42.667 0 1 1-60.33-60.33L451.669 512l-97.834-97.835a42.667 42.667 0 0 1 60.33-60.33L512 451.669zm0-281.003a42.667 42.667 0 0 1 0-85.334c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512A426.539 426.539 0 0 1 309.76 136.235a42.667 42.667 0 0 1 40.533 75.093A341.333 341.333 0 1 0 512 170.667zm55.168 456.832a42.667 42.667 0 0 1 60.33-60.331l42.667 42.667a42.667 42.667 0 0 1-60.33 60.33L567.168 627.5z"
              fill="#e0e0e0"
            />
          </svg>
        </div>
        <div className={styles.switch}>
          {['Auto', 'Dark', 'Light'].map((text, index) => (
            <Fragment key={index}>
              <input
                className={`${styles.radio} ${styles[text]}`}
                checked={findActive(text.toLowerCase())}
                id={`_${index}`}
                name="switch"
                onChange={() => toggleMode(text)}
                type="radio"
              />
              <label className={styles.switch__label} htmlFor={`_${index}`}>
                {text}
              </label>
            </Fragment>
          ))}
          <div className={` ${styles.switch__indicator}`} />
        </div>
      </div>
    </Mask>
  )
}
