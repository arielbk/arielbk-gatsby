export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime'
    },
    {
      name: 'repo',
      title: 'Repository',
      type: 'string'
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'string'
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'skill' }]
      }]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
