export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5df7d2b85e4403fa94ed49b0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bu5863cb',
                  apiId: 'b520e406-1391-4c2d-b4b0-9f3bdd83081c'
                },
                {
                  buildHookId: '5df7d2b85fd0f4b9aa08b91d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bumfbaa5',
                  apiId: '8432f804-a65c-4647-8f39-20b8de9926b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/susanto431/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bumfbaa5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
