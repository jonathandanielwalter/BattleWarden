let result = null

export async function doPost(matchResult: Object) {
    const res = await fetch('https://crusade-api.fly.dev/recordResult', {
        method: 'POST',
        body: JSON.stringify(matchResult)
    })

    const json = await res.json()
		result = JSON.stringify(json)
}

export async function get(url: string){
  try{
  const res = await fetch(url)
  console.log(JSON.stringify(res.json))
  return JSON.stringify(res.json)
  }catch{
    console.error("oh dear")
  }

}
