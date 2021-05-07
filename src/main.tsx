import '@compiled/react'
import 'twin.macro'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <main tw="absolute inset-0 flex flex-col justify-center items-center">
      <h1>{t('construction')}</h1>
      <a tw='underline' href='https://www.github.com/iiwii'>github.com/iiwii</a>
    </main>
  )
}
