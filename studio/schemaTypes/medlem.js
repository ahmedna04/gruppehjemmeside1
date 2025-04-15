export default {
    name: 'medlem',
    title: 'Gruppe­medlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string',
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'bio',
        title: 'Biografi',
        type: 'text',
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'logg',
        title: 'Loggføringer',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'text', title: 'Hva gjorde du?', type: 'string' },
              {
                name: 'dato',
                title: 'Dato',
                type: 'datetime',
              },
            ],
          },
        ],
      },
    ],
  };
  