
export interface Colors {
  name: string // 国际化版本请提供国际化字符串如：message.system.setting.style.default，非国际化版本直接写字符串，如：默认菜单风格
  menu: {
    textColor: string
    background: string
    childrenBackground: string
    hoverBackground: string
    submenuActiveColor: string
  }
  logo: {
    color: string
    background: string
  }
  header: {
    background: string
    textColor: string
    itemHoverColor: string
    breadcrumbTextColor: string
    borderColor: string
    tabBackground: string
  }
  container: {
    background: string
    mainBackground: string
  }
  page: {
    background: string
    color: string
    tipColor: string
    borderColor: string
  }
}

export interface Style {
  default: Colors
  light: Colors
  dark: Colors,
  [propName: string]: Colors
}
export const style: { default: { container: { background: string; mainBackground: string }; name: string; logo: { color: string; background: string }; header: { borderColor: string; background: string; tabBackground: string; itemHoverColor: string; breadcrumbTextColor: string; textColor: string }; page: { tipColor: string; borderColor: string; color: string; background: string }; menu: { hoverBackground: string; submenuActiveColor: string; background: string; textColor: string; childrenBackground: string } } } = {
  'default': {
    name: 'message.system.setting.style.default',
    menu: {
      textColor: '#bfcbd9',
      background: '#181f31',
      childrenBackground: '#1f2d3d',
      hoverBackground: '#203448',
      submenuActiveColor: '#fff'
    },
    logo: {
      color: '#f1f1f1',
      background: '#263445'
    },
    header: {
      background: '#fff',
      textColor: '#303133',
      itemHoverColor: 'rgba(0,0,0,.06)',
      breadcrumbTextColor: '#000000',
      borderColor: '#d8dce5',
      tabBackground: '#fff'
    },
    container: {
      background: '#f0f2f5',
      mainBackground: '#fff'
    },
    page: {
      background: '#fff',
      color: '#303133',
      tipColor: 'rgba(0, 0, 0, 0.45)',
      borderColor: '#ebeef5'
    }
  }
}