export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      title: true,
      name: 'Management',
      wrapper: { // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {}, // optional valid JS object with JS API naming ex:
        // { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '', // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Matters',
      url: '/management/matters',
      icon: 'icon-pencil',
    },
    {
      name: 'Contacts',
      url: '/management/contacts',
      icon: 'icon-people',
    },
    {
      name: 'Documents',
      url: '/management/documents',
      icon: 'icon-note',
    },
    {
      title: true,
      name: 'Settings',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Account',
      url: '/account',
      icon: 'icon-settings',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
      badge: {
        variant: 'info',
      },
    },
    {
      divider: true,
    },
  ],
};
