export default {
  title: 'Photo',
  name: 'photo',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['location', 'lqip', 'palette'],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fashion', value: 'fashion' },
          { title: 'Bridal', value: 'bridal' },
        ],
      },
    },
    {
      name: 'sizeH',
      title: 'Horizontal Size',
      type: 'string',
      options: {
        list: [
          { title: 'small', value: '1' },
          { title: 'medium', value: '2' },
          { title: 'big', value: '3' },
        ],
      },
    },
    {
      name: 'sizeV',
      title: 'Vertical Size',
      type: 'string',
      options: {
        list: [
          { title: 'small', value: '1' },
          { title: 'medium', value: '2' },
          { title: 'big', value: '3' },
        ],
      },
    },
  ],
  initialValue: {
    category: 'fashion',
    sizeH: '1',
    sizeV: '1',
  },
}
