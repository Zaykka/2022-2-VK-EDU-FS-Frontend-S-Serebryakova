/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof(bytes) != 'number' || bytes < 0) {
      return false
    } else {
      const size = {
        0 : ' B',
        1: ' KB',
        2: ' MB',
        3: ' GB'
      }
      let i = 0
      while (bytes >= 1024) {
        bytes /= 1024
        i += 1
      }
      return Math.round(bytes*100)/100 + size[i]
    }
}