export const getUniqueId = (length = 16): string => {
  return Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace('.', '')
}

/**
 * 빈 값 확인
 * @param {*} value
 * @return Boolean 빈 값인 경우 true 리턴
 */
export const isEmpty = (value: any) => {
  // 빈 값 체크
  const result = false
  if (value === undefined)
    return true

  if (typeof value === 'number') {
    if (value === 0)
      return true
  }
  else if (typeof value === 'string') {
    if (value === '' || value.length === 0)
      return true
  }
  else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (value.length === 0)
        return true
    }
    else if (!value) {
      return true
    }
    else {
      if (Object.keys(value).length === 0)
        return true
    }
  }
  return result
}
/**
 * 문자열 영문, 숫자 조합 확인
 * @param password
 */
export const isPassword = (password: string) => {
  const reg = /^[A-Za-z0-9~!@#$%<>^&*()]{8,16}$/
  const regEn = /[A-Za-z]/g
  const regNum = /[0-9]/g
  const regCh = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g
  return (reg.test(password) && regEn.test(password) && regNum.test(password) && regCh.test(password))
}

/**
 * 깊은 복사
 * @param {*} copyTarget 깊은 복사할 타겟
 * @return 복사한 대상
 */
export const makeDeepCopy = (copyTarget: any) => {
  return JSON.parse(JSON.stringify(copyTarget))
}

/**
 * 파일 용량 단위 변환
 * @param bytes
 * @param decimals
 */
export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0)
    return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
