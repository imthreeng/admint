import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['icon']

  connect() {
    // 페이지 로드 시 다크모드 초기화
    this.initialize()
    this.updateIcon()
  }

  initialize() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  toggle() {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }

    this.updateIcon()
  }

  updateIcon() {
    const darkIcon = this.iconTargets[0]
    const lightIcon = this.iconTargets[1]

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      lightIcon.classList.remove('hidden')
      darkIcon.classList.add('hidden')
    } else {
      lightIcon.classList.add('hidden')
      darkIcon.classList.remove('hidden')
    }
  }
}
