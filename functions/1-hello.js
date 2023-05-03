// domain/.netlify/pathToFunction
// exports.handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: 'Hello World!' })

// }
// const person ={
//  name:'john'
// }
exports.handler = async (event, context, cb) => {
 
  return {
    statusCode: 200,
    body: 'Our First Netlify Function Example Yay!!',
  }
}
