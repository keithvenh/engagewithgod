export const donors = 33;

export const yearly = {
  goal: 72000,
  current: 49880
}

export const gap = {
  goal: 30185.26,
  current: 0
}

export const special = {
  goal: 7342.74,
  current: 1000
}

export const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});