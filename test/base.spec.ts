import textlint from '@markuplint/rule-textlint'
import doctype from '@markuplint/rules/lib/doctype'
import { exec } from 'markuplint-sync'

describe('basic usage', () => {
  it('should just work', () => {
    expect(
      exec({
        sourceCodes: /* HTML */ `<html>
          <head>
            <title>Any Page</title>
          </head>
          <body>
            <h1>Any Page</h1>
            <p>Anonymous</p>
          </body>
        </html>`,
        config: {
          rules: {
            doctype: true,
          },
        },
        rules: [doctype],
      })[0].results,
    ).toMatchSnapshot()

    expect(() =>
      exec({
        sourceCodes: 'content',
        config: {
          rules: {
            textlint: true,
          },
        },
        rules: [textlint],
      }),
    ).toThrow('`verifySync` finished async. Use `verify` instead')
  })
})