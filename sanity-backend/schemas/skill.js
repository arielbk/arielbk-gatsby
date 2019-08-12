export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      // TODO: Make this a color type
      type: 'string'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      // TODO: Make this a color type
      type: 'string'
    },
  ],
}
