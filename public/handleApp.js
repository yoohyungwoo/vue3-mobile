const foregroundEvent = () => {
  window.postMessage('foreground')
}

const callbackPrevButtonClick = () => {
  window.postMessage('prevButton')
}

const themeKey = 'vueuse-color-scheme'

const themeCallBack = (e) => {
  if (localStorage.getItem(themeKey) === 'auto') {
    const theme = e === '1' ? 'light' : 'dark'
    if (document.documentElement.classList.value !== theme)
      toggleDark()

    setTimeout(() => {
      localStorage.setItem(themeKey, theme)
    }, 300)
  }
}

const networkState = () => {
  window.postMessage('networkChange')
}

const backgroundEvent = () => {
  window.postMessage('background')
}

const networkStateCallBack = (e) => {
  localStorage.setItem('networkType', e === 'wifi' ? e : '무선망')
}
