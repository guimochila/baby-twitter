import * as React from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Tweet from './Tweet'
import type { TweetType } from './Tweet'

interface TweetsListProps {
  tweets: TweetType[]
}

function TweetsList({ tweets }: TweetsListProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {tweets.map((tweet) => (
        <React.Fragment key={tweet.id}>
          <Tweet tweet={tweet} />
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  )
}

export default TweetsList
