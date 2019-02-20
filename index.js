const fetch = require('node-fetch')
const endpoint = 'https://raas.now.sh'

const auth = {}

module.exports.key = {}

module.exports.key.get = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/key/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json.key)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.key.regenerate = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/key/regen`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json.key)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.key.set = (key) => {
  auth.key = key
}

module.exports.deployments = {}

module.exports.deployments.create = (memeIndex) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/deployments/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        memeIndex
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.deployments.list = (memeIndex) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/deployments/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        memeIndex
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json.deployments)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.deployments.getInfo = (code) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/deployments/info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        code
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.deployments.view = (code) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/deployments/view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        code
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json.views)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.deployments.delete = (code) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/deployments/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        code
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.aliases = {}

module.exports.aliases.alias = (code, alias) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/aliases/alias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        code,
        alias
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.aliases.list = (code) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/aliases/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        code
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json.aliases)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.aliases.getInfo = (alias) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/aliases/info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        alias
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}

module.exports.aliases.delete = (alias) => {
  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/aliases/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: auth.key,
        alias
      })
    }).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.error) {
        throw new Error(json.error)
      }
      resolve(json)
    }).catch((error) => {
      reject(error)
    })
  })
}