import util from '~/helpers/util'

// export default function (context) {
//   // If the user is not authenticated
//   if (process.server) {
//     const {
//       req,
//       redirect
//     } = context
//     if (!util.getCookieFromHeader(req.headers.cookie, 'token')) {
//       return redirect('/login')
//     } else {
//       return redirect('/')
//     }
//   }
// }
