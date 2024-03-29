const result = {
  key: 'root',
  status: 'nested',
  children: [
    {
      key: 'common',
      status: 'nested',
      children: [
        {
          key: 'follow',
          status: 'added',
          value: false,
        },
        {
          key: 'setting1',
          status: 'unchanged',
          value: 'Value 1',
        },
        {
          key: 'setting2',
          status: 'deleted',
          value: 200,
        },
        {
          key: 'setting3',
          newValue: null,
          oldValue: true,
          status: 'changed',
        },
        {
          key: 'setting4',
          status: 'added',
          value: 'blah blah',
        },
        {
          key: 'setting5',
          status: 'added',
          value: {
            key5: 'value5',
          },
        },
        {
          key: 'setting6',
          status: 'nested',
          children: [
            {
              key: 'doge',
              status: 'nested',
              children: [
                {
                  key: 'wow',
                  newValue: 'so much',
                  oldValue: '',
                  status: 'changed',
                },
              ],
            },
            {
              key: 'key',
              status: 'unchanged',
              value: 'value',
            },
            {
              key: 'ops',
              status: 'added',
              value: 'vops',
            },
          ],
        },
      ],
    },
    {
      key: 'group1',
      status: 'nested',
      children: [
        {
          key: 'baz',
          newValue: 'bars',
          oldValue: 'bas',
          status: 'changed',
        },
        {
          key: 'foo',
          status: 'unchanged',
          value: 'bar',
        },
        {
          key: 'nest',
          newValue: 'str',
          oldValue: {
            key: 'value',
          },
          status: 'changed',
        },
      ],
    },
    {
      key: 'group2',
      status: 'deleted',
      value: {
        abc: 12345,
        deep: {
          id: 45,
        },
      },
    },
    {
      key: 'group3',
      status: 'added',
      value: {
        deep: {
          id: {
            number: 45,
          },
        },
        fee: 100500,
      },
    },
  ],
};

export default result;
