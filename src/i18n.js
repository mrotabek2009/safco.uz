import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJSON from '../public/locale/en/translation.json'
import ruJSON from '../public/locale/ru/translation.json'
i18n.use(initReactI18next).init({
	resources: {
		en: { ...enJSON },
		pt: { ...ruJSON },
	},
	lng: 'en',
})
