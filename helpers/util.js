export default {
    getCookieFromHeader(cookie, name) {
        const nameEQ = name + '='
        if (cookie) {
          const ca = cookie.split(';')
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) === 0) {
              const res = c.substring(nameEQ.length, c.length)
              return decodeURIComponent(res)
            }
          }
        }
    
        return null
      }
  }
  