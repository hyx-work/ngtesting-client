export const ORG_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'org-admin/org-settings/org/list',
        data: {
          menu: {
            title: '当前组织',
            icon: 'ion-edit',
            selected: false,
            order: 2,
          },
        },
      },
      {
        path: 'org-admin/org-settings/org/list',
        data: {
          menu: {
            title: '（无管理权限）',
            icon: 'ion-edit',
            selected: false,
            order: 2,
          },
        },
      },
      {
        path: '',
        data: {
          menu: {
            title: '组织管理',
            icon: 'ion-edit',
            selected: true,
            expanded: true,
            order: 1,
          },
        },
        children: [
          {
            path: 'org-admin/org-settings/org/list',
            data: {
              menu: {
                title: '组织列表',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/org-settings/user/list',
            data: {
              menu: {
                title: '组织用户',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/org-settings/group/list',
            data: {
              menu: {
                title: '组织群组',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/org-settings/org-role/list',
            data: {
              menu: {
                title: '组织角色',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: '测试管理',
            icon: 'ion-edit',
            selected: true,
            expanded: true,
            order: 1,
          },
        },
        children: [
          {
            path: 'org-admin/test-settings/project-role/list',
            data: {
              menu: {
                title: '角色权限',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/case-settings/case-type/list',
            data: {
              menu: {
                title: '用例类型',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/case-settings/case-priority/list',
            data: {
              menu: {
                title: '用例优先级',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/case-settings/custom-field/list',
            data: {
              menu: {
                title: '自定义字段',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
        ],
      },

      {
        path: '',
        data: {
          menu: {
            title: '问题管理',
            icon: 'ion-edit',
            selected: true,
            expanded: true,
            order: 1,
          },
        },
        children: [
          {
            path: 'org-admin/issue-settings/issue-type/list',
            data: {
              menu: {
                title: '问题类型',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/issue-status/list',
            data: {
              menu: {
                title: '问题状态',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/issue-priority/list',
            data: {
              menu: {
                title: '优先级',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/issue-resolution/list',
            data: {
              menu: {
                title: '解决措施',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/issue-field/list',
            data: {
              menu: {
                title: '问题字段',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: '',
            data: {
              menu: {
                title: '问题界面',
                icon: 'ion-edit',
                selected: true,
                expanded: true,
                order: 1,
              },
            },
            children: [
              {
                path: 'org-admin/issue-settings/issue-page/page-list',
                data: {
                  menu: {
                    title: '界面',
                    icon: 'ion-edit',
                    selected: false,
                    order: 1,
                  },
                },
              },
              {
                path: 'org-admin/issue-settings/issue-page/solution-list',
                data: {
                  menu: {
                    title: '界面方案',
                    icon: 'ion-edit',
                    selected: false,
                    order: 1,
                  },
                },
              },
            ],
          },
          {
            path: 'org-admin/issue-settings/field/list',
            data: {
              menu: {
                title: '工作流',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/privilege/list',
            data: {
              menu: {
                title: '权限方案',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
          {
            path: 'org-admin/issue-settings/priority/list',
            data: {
              menu: {
                title: '消息通知',
                icon: 'ion-edit',
                selected: false,
                order: 1,
              },
            },
          },
        ],
      },
    ],
  },
];
