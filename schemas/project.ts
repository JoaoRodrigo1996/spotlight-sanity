export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'published_date',
      type: 'date',
      title: 'Published date',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
    },
    {
      title: 'Techs',
      name: 'techs',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {},
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
