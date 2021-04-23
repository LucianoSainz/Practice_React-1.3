

export const Note = ({id, content, date}) => {
    return (
        <div>
        <p>
        {content}
        <time>{date}</time>
       </p>
       </div>
          )
  }

  