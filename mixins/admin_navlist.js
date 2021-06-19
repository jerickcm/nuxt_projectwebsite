export const navlist = {
    data: () => ({
      fixed: false,
      navlist: [
        {
          icons: 'mdi-newspaper-variant-multiple-outline',
          label: 'NEWS',
          link: 'admin-news-manage'
        },
        {
          icons: 'mdi-post-outline',
          label: 'POST',
          link: 'admin-post-manage'
        },
        {
          icons: 'mdi-blogger',
          label: 'BLOG',
          link: 'admin-blog-manage'
        },
        {
          icons: 'mdi-comment-quote-outline',
          label: 'Quotes',
          link: 'admin-quotes-manage'
        },
        {
          icons: 'mdi-earth',
          label: 'Reminders',
          link: 'admin-world-reminders-manage'
        },

      ]
    })
}
