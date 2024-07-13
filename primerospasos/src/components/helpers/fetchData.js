export const fetchData = async (endPoint) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await res.json()
        console.log(data)
        return {data, isLoading: false}
    } catch (error) {
        console.log(error)
    }
}