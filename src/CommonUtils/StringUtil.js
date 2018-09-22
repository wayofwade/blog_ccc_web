/**
 * Created by chencc on 2018/9/22.
 */
const StringUtil = {
  /*
  * 判断字符串的长度
  * */
  StrLength (str) {
    let len = 0
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i)
      // 单字节加1
      if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
        len++
      } else {
        len += 2
      }
    }
    return len
  }
}
export default StringUtil
