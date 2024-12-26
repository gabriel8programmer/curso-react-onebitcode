
import CommentsForm from "./components/CommentsForm"
import Comment from "./components/Comment"
import useCommentsCollection from "./hooks/useCommentsCollection"

export default function App() {

  const { comments, addComment } = useCommentsCollection()

  return (
    <div className="app">
      <h1>Seção de Comentários</h1>
      <CommentsForm addComment={addComment} />
      <div className="comments">
        {comments.length > 0 ?
          comments.sort((a, b) => a - b)
            .map(comment => (
              <Comment
                key={comment.id}
                email={comment.email}
                comment={comment.comment}
                date={comment.date}
              />
            )) : (
            <div>Seja o primeiro a comentar!</div>
          )}
      </div>
    </div>
  )
}