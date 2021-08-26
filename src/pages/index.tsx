import { useDarkMode } from 'next-dark-mode'
import React, { ReactElement } from 'react'
import Layout from '../components/Layout/Layout'
export default function Index(): ReactElement {
  const { darkModeActive } = useDarkMode()
  return (
    <div
      className={`${darkModeActive ? 'dark-theme' : 'light-theme'}`}
      id="app"
    >
      <Layout />
    </div>
  )
}
