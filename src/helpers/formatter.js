import spacetime from 'spacetime'

// Funcao formata phone
export const formatterData = (phone = '', predefined = '', formatter = '', textOutput = '') => {
  const emptyFormatterAndText = !formatter || !textOutput
  const predefinedAllowed = [
    'phone',
    'cpf',
    'rg',
    'postalCode',
    'plateCar'
  ]
  const config = {
    formatter: '',
    textOutput: ''
  }

  if (!phone || typeof phone !== 'string') return phone
  
  if (!predefined && !predefinedAllowed.includes(predefined) && !emptyFormatterAndText) return phone
  
  switch (predefined) {
    case 'cpf':
      config.formatter = /^(\d{3})(\d{3})(\d{3})(\d{2})/
      config.textOutput = '$1.$2.$3.$4'
      break;
    case 'rg':
      config.formatter = /^(\d{2})(\d{3})(\d{3})(\d{1})/
      config.textOutput = '$1.$2.$3-$4'
      break;
    case 'postalCode':
      config.formatter = /^(\d{5})(\d{3})/
      config.textOutput = '$1-$2'
      break;
    case 'plateCar':
      config.formatter = /^(\w{3})(\w{4})/
      config.textOutput = '$1-$2'
      break;
    default:
      config.formatter = /^(\d{2})(\d{4,5})(\d{4})/
      config.textOutput = '$1 $2-$3'
  }

  return phone.replace(config.formatter, config.textOutput)
}

// Funcao formata Money
/*
  Locale ['pt-BR', 'es-MX', ...]
  Currency ['BRL', 'MXN', ...]
*/
export const formatMoney = (value, locale, currency, currencyDisplay = 'symbol', thousandsSeparator = true, minimumIntegerDigits = 2, minimumFractionDigits = 2) => {
	const currencyDisplayAllowed = [
    'symbol',
    'code',
    'name'
  ]

  if (!value || !locale || !currency) return ''
  
  if (!currencyDisplayAllowed.includes(currencyDisplay)) return 'Error currencyDisplay'
  
  if (!thousandsSeparator || typeof thousandsSeparator !== 'boolean') return value
  
  if (!minimumIntegerDigits || minimumIntegerDigits <= 0) return 'Error minimumIntegerDigits'
  
  if (!minimumFractionDigits || minimumFractionDigits <= 0) return 'Error minimumFractionDigits'
  
  const printConfig = {
    style: 'currency',
    currency: currency,
    currencyDisplay: currencyDisplay,
    useGrouping: thousandsSeparator,
    minimumIntegerDigits: minimumIntegerDigits,
    minimumFractionDigits: minimumFractionDigits
  }

  return Intl.NumberFormat(locale, printConfig).format(value / 100);
}
