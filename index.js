const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const blogs = [
  { id: 1, title: 'Blog 1', detail: 'Here is blog 1' },
  { id: 2, title: 'Blog 2', detail: 'Here is blog 2' },
  { id: 3, title: 'Blog 3', detail: 'Here is blog 3' },
  { id: 4, title: 'Blog 4', detail: 'Here is blog 4' },
  { id: 5, title: 'Blog 5', detail: 'Here is blog 5' },
]

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.get('/api/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/api/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id === parseInt(req.params.id))
  if (!blog) res.status(404).send('There is not blog exists with given ID.')
  res.send(blog)
})

app.listen(port, () => console.log(`Listening on port ${port}`))