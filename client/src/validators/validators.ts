export const validateFloat = (str: string) => str == "" || (!isNaN(Number(str)) && !isNaN(parseInt(str)))
export const validateInt = (str: string) => validateFloat(str) && str.indexOf('.') == -1
export const validateFloatMaxTwoPintPositions = (str: string) => validateInt(str) || (validateFloat(str) && str.indexOf('.') >= str.length - 3)