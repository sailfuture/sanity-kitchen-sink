export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60256da806092a4e64098853',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yvcca3zs',
                  apiId: '561b3c3f-75de-4717-9992-dd8afc8b3f59'
                },
                {
                  buildHookId: '60256da8632bfe53f31b0c06',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-aq59uyer',
                  apiId: 'ecb9206b-1420-463b-933a-794ff1ed1950'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sailfuture/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-aq59uyer.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
