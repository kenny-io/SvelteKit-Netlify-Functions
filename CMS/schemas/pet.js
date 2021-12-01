import {UserIcon} from '@sanity/icons'

export default {
  name: 'pet',
  title: 'Pet',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please type the name of the pet',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'string',
      description: 'How old is the pet',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where in the world is the pet',
    },
    {
      name: 'funfact',
      title: 'Fun Fact',
      type: 'string',
      description: 'A fun fact about the pet',
    },
    {
      name: 'lookingfor',
      title: 'Looking For',
      type: 'string',
      description: 'What is the pet looking for',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
