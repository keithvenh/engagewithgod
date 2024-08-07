export const donors = 33;

export const yearly = {
  goal: 96000,
  current: 49880
}

export const gap = {
  goal: 46120,
  current: 0
}

export const special = {
  goal: 2400,
  current: 0
}

export const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});