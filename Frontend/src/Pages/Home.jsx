import React from 'react'

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:PORT/api/users")
    .then(rawData => rawData.json())
    .then(res => console.log(res));
  }, [])
  return (
    <div>
        <h2>Click on any one of these links to be redirected there</h2>
    </div>
  )
}

export default Home
