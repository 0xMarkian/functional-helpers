export const iterate = ({
  max = 0,
  min = 0,
  step = 1,
  decrease = false,
  includeLimits = true,
}, callback, initialValue = []) => {
  if (!includeLimits && max === min) return []

  const decreaseIter = (i, acc) => {
    if ((includeLimits && i < min) || (!includeLimits && i <= min)) return acc

    return decreaseIter(i - 1, callback(i, acc))
  }

  const increaseIter = (i, acc) => {
    if ((includeLimits && i > max) || (!includeLimits && i >= max)) return acc

    return increaseIter(i + 1, callback(i, acc))
  }

  if (decrease) return decreaseIter(max, initialValue)
  return increaseIter(min, initialValue)
}

export const storeConsts = (...args) => args[args.length-1](...args.slice(0, args.length))
