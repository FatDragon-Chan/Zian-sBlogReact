import React, { ReactElement } from 'react'
import styles from './Mask.module.scss'

export interface MaskProps {
  children: ReactElement
  visible: boolean
}

function Mask(props: MaskProps): React.ReactElement | null {
  // 获取 props
  const { children, visible } = props

  // 遍历生成新的 El 集合
  const child = React.Children.map(children, (item) => {
    const childProps = {
      ...item.props,
    }
    // 使用 元素和新的 props 克隆一个新的 react 元素
    return React.cloneElement(item, childProps)
  })

  return (
    <div className={`${styles.wrap} ${visible ? styles.show : styles.hide} `}>
      {child}
    </div>
  )
}

export default Mask
