const menuModel = [
  {
    label: "Home",
    items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
  },
  {
    label: "Science Demos",
    items: [
      {
        label: "Environmental Science",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Coral Reefs and Abiotic Factors",
            icon: "pi pi-fw pi-bookmark",
            to: "/apes/abioticcoral",
            artistName: "",
          },
          {
            label: "Soil Types",
            icon: "pi pi-fw pi-bookmark",
            to: "/apes/soiltypes",
            artistName: "",
          },
          {
            label: "Water Testing",
            icon: "pi pi-fw pi-bookmark",
            to: "/apes/watertesting",
            artistName: "",
          },
        ],
      },
      {
        label: "Biology",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Cell Division",
            icon: "pi pi-fw pi-bookmark",
            to: "/bio/celldivision",
            artistName: "Daria Golitsyna",
          },
        ],
      },
      /* {
                label: '-- Science',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                        { label: 'Placeholder', icon: 'pi pi-fw pi-bookmark' },
                        ]
                    },
                ]
            } */
    ],
  },
];

export default menuModel;
