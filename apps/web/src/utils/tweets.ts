import { client } from './api-client'

function fetchTweets() {
  return client('/tweets')
}

function postTweet({ id, tweet }: { id: string; tweet: string }) {
  // @ts-ignore
  return client('/tweets', { body: { ownerId: id, tweet } })
}

export { fetchTweets, postTweet }
