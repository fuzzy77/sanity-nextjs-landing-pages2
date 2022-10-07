export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '633ff24a2ec69629fef8e51d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-73fq5eha',
                  apiId: '63bd2665-9971-401a-9ddc-adcb1d1d95c9'
                },
                {
                  buildHookId: '633ff24a25a0fc297f316844',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-cw6opf9i',
                  apiId: 'ca8d1085-2fef-498d-b849-1b5fa8bda2a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fuzzy77/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-cw6opf9i.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
