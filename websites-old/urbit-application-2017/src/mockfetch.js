// Assume these are all GET requests

export const mockFetch = (path, params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.type === "all") {
        resolve({
           ok: true,
           data: [{name: "john calzone", age: 24}]
        })
      } else {
        reject({
          error: "no"
        })
      }
    }, 100)
  })
}
