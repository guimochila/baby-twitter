import * as React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useUser } from '../contexts/Authentication'
import { postTweet } from '../utils/tweets'

function TweetForm() {
  const { user } = useUser()
  const [tweet, setTweet] = React.useState('')
  const queryClient = useQueryClient()
  const { mutate, isSuccess, isError } = useMutation(postTweet, {
    onSuccess: () => {
      queryClient.invalidateQueries('tweets')
    },
  })

  React.useEffect(() => {
    if (isSuccess) {
      setTweet('')
    }
  }, [isSuccess])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault()

    if (!user?.id) return

    await mutate({ id: user?.id!, tweet })
  }

  return (
    <div>
      {isError ? (
        <span style={{ color: 'red', paddingBottom: '5px' }}>
          Something went wrong, please try again.
        </span>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Enter your twitter</label>
        <input
          type="text"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
        <button>Tweet</button>
      </form>
    </div>
  )
}

export default TweetForm
