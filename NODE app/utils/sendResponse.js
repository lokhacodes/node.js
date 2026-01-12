 
export function sendResponse(res: any, statusCode: number, contentType: string, payload: string) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(payload)
}
