import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export interface TweetType {
  id: string
  text: string
  createdAt: string
  user: {
    name: string
  }
}

interface TweetProps {
  tweet: TweetType
}

function Tweet({ tweet }: TweetProps) {
  const tweetDate = new Date(tweet.createdAt).toLocaleString('es')
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={`${tweet.user.name} - ${tweetDate}`}
        secondary={<React.Fragment>{tweet.text}</React.Fragment>}
      />
    </ListItem>
  )
}

export default Tweet
