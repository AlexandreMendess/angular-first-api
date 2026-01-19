function handlerError(response) {
  return error => {
    console.log('Something bad has  happened**', error.stack)
    response.writeHead(500, DEFAULT_HEADER)
    response.write(JSON.stringify({
      error: 'internet server error!!'
    }))

    return response.end()
  }
}

module.exports = handlerError;