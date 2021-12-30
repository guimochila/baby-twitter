import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export interface TweetType {
  id: string
  name: string
  tweet: string
  created_at: string
}

interface TweetProps {
  tweet: TweetType
}

function Tweet({ tweet }: TweetProps) {
  const tweetDate = new Date(tweet.created_at).toLocaleString('es')
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={`${tweet.name} - ${tweetDate}`}
        secondary={<React.Fragment>{tweet.tweet}</React.Fragment>}
      />
    </ListItem>
  )
}

export default Tweet
