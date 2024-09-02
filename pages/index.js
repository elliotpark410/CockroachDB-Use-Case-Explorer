import React, { useState, useEffect } from 'react'

export default function Home() {
  const [customerStories, setCustomerStories] = useState([])

  useEffect(() => {
    fetch('/api/customerStory')
      .then(res => res.json())
      .then(data => setCustomerStories(data))
  }, [])

  return (
    <div>
      <h1>CockroachDB Use Case Explorer</h1>
      <ul>
        {customerStories.map(story => (
          <li key={story.id}>{story.companyName}</li>
        ))}
      </ul>
    </div>
  )
}