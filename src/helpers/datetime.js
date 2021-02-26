import spacetime from 'spacetime'

const config = {
  timezone: 'America/Sao_Paulo',
  formatterDate: '{date-pad}/{iso-month}/{year}',
  formatterTime: '{hour-24-pad}:{minute-pad}:{second-pad} {ampm}'
}
const AllowedTypes = [
  'day',
  'month',
  'year',
  'week',
  'quarter'
]

// Funcao formata data e hora
export const formatDatetime = (datetime, timezone, dateFormatter, hourFormatter) => {
  let currentDatetime = spacetime(datetime)
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime

  if (!currentDatetime.isValid()) return 'Invalid datetime'

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  currentDatetime = currentDatetime.goto(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que retorna a data de hj
export const datetimeNow = (timezone, dateFormatter, hourFormatter) => {
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  const currentDatetime = spacetime.now(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que retorna a data de hoje primeiro horario
export const datetimeToday = (timezone, dateFormatter, hourFormatter) => {
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  const currentDatetime = spacetime.today(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que retorna a data de ontem no primeiro horario
export const datetimeTomorrow = (timezone, dateFormatter, hourFormatter) => {
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  const currentDatetime = spacetime.tomorrow(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que adiciona ou Subtrai (day, month, year, week, quarter) na data
export const datetimeAddOrSubtract = (datetime, timezone, segment, type, value, dateFormatter, hourFormatter) => {
  let currentDatetime = spacetime(datetime)
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime
  let defaultValue = 1
  let defaultType = 'day'
  let defaultSegment = 'add'
  const AllowedSegments = [
    'add',
    'subtract'
  ]

  if (!currentDatetime.isValid()) return 'Invalid datetime'

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  if (value) defaultValue = value

  if (type && AllowedTypes.includes(type)) defaultType = type

  if (segment && AllowedSegments.includes(segment)) defaultSegment = segment

  if (defaultSegment === 'add') {
    currentDatetime = currentDatetime.add(defaultValue, defaultType)
  } else {
    currentDatetime = currentDatetime.subtract(defaultValue, defaultType)
  }

  currentDatetime = currentDatetime.goto(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que adiciona ou Subtrai (day, month, year, week, quarter) na data
export const datetimeAddAndSubtract = (datetime, timezone, subtractType, subtractValue, addType, addValue, dateFormatter, hourFormatter) => {
  let currentDatetime = spacetime(datetime)
  let defaultTimezone = config.timezone
  let defaultDateFormatter = config.formatterDate
  let defaultHourFormatter = config.formatterTime
  let defaultSubtractValue = 1
  let defaultSubtractType = 'months'
  let defaultAddValue = 1
  let defaultAddType = 'day'

  if (!currentDatetime.isValid()) return 'Invalid datetime'

  if (timezone) defaultTimezone = timezone

  if (dateFormatter) defaultDateFormatter = dateFormatter

  if (hourFormatter) defaultHourFormatter = hourFormatter

  if (subtractValue) defaultSubtractValue = subtractValue

  if (addValue) defaultAddValue = addValue

  if (subtractType && AllowedTypes.includes(subtractType)) defaultSubtractType = subtractType

  if (addType && AllowedTypes.includes(addType)) defaultAddType = addType

  currentDatetime = currentDatetime.subtract(defaultSubtractValue, defaultSubtractType).add(defaultAddValue, defaultAddType)

  currentDatetime = currentDatetime.goto(defaultTimezone)

  const currentDate = currentDatetime.format(defaultDateFormatter)
  const currentTime = currentDatetime.format(defaultHourFormatter)

  return {
    date: currentDate,
    time: currentTime
  }
}

// Funcao que gera uum range de horas
export const generateHours = (startHour = 9, endHour = 18) => {
  const listHour = []

  for (let hour = startHour; hour < endHour; hour++) {
    const textHour = `0${hour}`.substr(-2)
    listHour.push(generateMinutesForHour(textHour))
  }

  return listHour.reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue],
    []
  )
}

function generateMinutesForHour (hour, { intervalBetweenMinutes = 30, maxMinute = 30 } = {}) {
  const listHourWithMinutes = []

  for (let minute = 0; minute <= maxMinute; minute += intervalBetweenMinutes) {
    const textMinute = `0${minute}`.substr(-2)
    listHourWithMinutes.push(`${hour}:${textMinute}`)
  }

  return listHourWithMinutes
}

// Funcao que retorna o tempo da data
export const datetimeHowMuchTime = (datetime, timezone) => {
  let today = spacetime()
  let currentDatetime = spacetime(datetime)
  let defaultTimezone = config.timezone

  if (!currentDatetime.isValid()) return 'Invalid datetime'

  if (currentDatetime.isAfter(today)) return 'Invalid datetime'

  if (timezone) defaultTimezone = timezone

  currentDatetime = currentDatetime.goto(defaultTimezone)
  today = today.goto(defaultTimezone)

  const diffDatetime = today.since(currentDatetime)

  return diffDatetime
}
