import React, { ReactElement } from 'react'
import { useDarkMode } from 'next-dark-mode'
import { useRouter } from 'next/router'
import styles from './Nav.module.scss'

interface BtnConfig {
  label: string
  icon: string
  target?: '_blank' | '_self'
  linkRouterName?: string
  func: (config: BtnConfig | never) => void
}

export default function Nav(): ReactElement {
  const router = useRouter()
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()
  // 切换模式
  const toggleThemeMode = (): void => {
    darkModeActive ? switchToLightMode() : switchToDarkMode()
  }
  // 跳转
  const routerLink = (config: BtnConfig): void => {
    if (config.target === '_blank') {
    } else if (config.target === '_self') {
    }

    router.push(config.linkRouterName || '')
  }
  const btnConfigs: Array<BtnConfig> = [
    {
      label: '首页',
      icon: '',
      target: '_blank',
      func: routerLink,
    },
    {
      label: '主题切换',
      icon: '',
      func: toggleThemeMode,
    },
  ]

  return (
    <div className={styles.container}>
      {btnConfigs.map((config) => {
        return (
          <div
            key={config.label}
            onClick={() => config.func(config)}
            className={styles.navItem}
          >
            {config.label}
          </div>
        )
      })}
    </div>
  )
}
