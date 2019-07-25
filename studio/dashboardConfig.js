export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d39d439407c62a34aaee7e7',
                  title: 'Sanity Studio',
                  name: 'go-my-blog-studio',
                  apiId: 'ad27d1be-7ad5-4745-9198-f02d1fa828e1'
                },
                {
                  buildHookId: '5d39d4385600beaca6eb850f',
                  title: 'Blog Website',
                  name: 'go-my-blog',
                  apiId: '3dda2cfb-6c31-4016-841c-6d5b58c0b410'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dudulxyz/go-my-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://go-my-blog.netlify.com', category: 'apps'}
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
