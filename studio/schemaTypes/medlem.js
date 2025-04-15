const medlem = {
    name: 'medlem',
    title: 'Medlem',
    type: 'document',
    fields: [
      {
        name: 'navn',
        title: 'Navn',
        type: 'string',
      },
      {
        name: 'rolle',
        title: 'Rolle',
        type: 'string',
      },
      {
        name: 'bilde',
        title: 'Bilde',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  
  export default medlem
  