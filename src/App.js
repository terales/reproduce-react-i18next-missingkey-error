import React from 'react'
import { useTranslation } from 'react-i18next'

const DetailsPlaceholder = () => {
  const { t } = useTranslation()

  return (
    <h4 className='zero-state-section-text'>
      {t('selectAction')}
      <small>Subtitle</small>
    </h4>
  )
}

export default DetailsPlaceholder
