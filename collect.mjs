import { writeFile } from 'node:fs/promises'
import { get } from 'https'

const url = 'https://github.com/spdx/license-list-XML/tree/main/src/exceptions'

// I know that parsing HTML with regex is a bad idea, but it's not done on the published package.

const response = await new Promise(resolve => {
  get(url).addListener('response', async response => {
    let body = ''
    
    response.addListener('data', async data => {
      body += data
    })
    response.addListener('end', async () => {
      resolve(body)
    })
  })
})

const licenses = [...response.matchAll(/href="\/spdx\/license-list-XML\/blob\/main\/src\/exceptions\/(?<exception>[a-zA-Z0-9-_.]+\.xml)/g)].map(e => e.groups.exception ?? '').filter(Boolean) ?? []
await writeFile('index.json', JSON.stringify(licenses, null, 2))

console.log(licenses)
