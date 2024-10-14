export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Image for the blog',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description to showcase blog',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
