const generateKey = (pre: string, index: string | number): string => {
  return `${pre}_${index}`
}

export default generateKey
