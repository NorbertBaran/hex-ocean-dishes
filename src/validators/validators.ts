export const validateFloat = str => str == "" || (!isNaN(str) && !isNaN(parseInt(str)))
export const validateInt = str => validateFloat(str) && str.indexOf('.') == -1
export const validateFloatMaxTwoPintPositions = str => validateInt(str) || (validateFloat(str) && str.indexOf('.') >= str.length - 3)