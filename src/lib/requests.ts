let result = null

export async function doPost (matchResult: Object) {
    const res = await fetch('http://localhost:8080/test', {
        method: 'POST',
        body: JSON.stringify(matchResult)
    })

    const json = await res.json()
		result = JSON.stringify(json)
}