exports.userData = {
  user: {
    appObjectId: 'user',
    dataAccessLayer: {
      jpas: {
        jpaName: {},
      },
    },
    content: [
      //  tasParameter
      [
        {
          name: 'نام',
          title: 'firstName',
          value: {
            type: 'primitive',
            schema: {
              //  Entity Schema
              //  EntityGenerator.js
              type: 'String',
              isNotNull: true, //  Default Value
              isNotBlank: true, //  Default Value
              isEmail: true, //  Default Value
              isUnique: false, // Default Value
              size: { minValue: 5, maxValue: 50 }, //  Default Value
              columnLength: 50, //  Default Value
              //  util.js
              isValidInModelBuilder: true, //  Default Value
              isValidInEntityBuilder: true, //  Default Value
            },
          },
        },
        {
          name: 'نام خانوادگی',
          title: 'lastName',
          value: {
            type: 'primitive',
            schema: {
              type: 'String',
            },
          },
        },
      ],
      [
        {
          name: 'ایمیل',
          title: 'email',
          value: {
            type: 'primitive',
            schema: {
              type: 'String',
            },
          },
        },
        {
          name: 'کلمه عبور',
          title: 'password',
          value: {
            type: 'primitive',
            schema: {
              type: 'String',
            },
          },
        },
      ],
    ],
  },
  signinRequest: {
    appObjectId: 'signinRequest',
    dataAccessLayer: {
      jpas: {},
    },
    content: [
      //  tasParameter
      [
        {
          name: 'ایمیل',
          title: 'email',
          value: {
            type: 'primitive',
            schema: {
              type: 'String',
            },
          },
        },
        {
          name: 'کلمه عبور',
          title: 'password',
          value: {
            type: 'primitive',
            schema: {
              type: 'String',
            },
          },
        },
      ],
    ],
  },
};
