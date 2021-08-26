import React, { ReactElement } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Content from './Content/Content'
export default function Layout(): ReactElement {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
