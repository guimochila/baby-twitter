import * as React from 'react'
import { useQuery } from 'react-query'
import TweetForm from '../components/TweetForm'
import TweetsList from '../components/Tweets'
import { fetchTweets } from '../utils/tweets'

function TimelinePage() {
  const { data, isLoading } = useQuery('tweets', fetchTweets)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!data) {
    return <span>No tweets</span>
  }

  const { tweets } = data

  return (
    <div>
      <h2>Tweets</h2>
      <TweetForm />
      <TweetsList tweets={tweets} />
    </div>
  )
}

export default TimelinePage
