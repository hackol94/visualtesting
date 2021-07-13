
const PuppeteerEmail = require('puppeteer-email')

const client = new PuppeteerEmail('outlook')

const usernam = 'fiduciariaBogota'
const passwor = 'FssnfiduciaqVLS*1'
module.exports = async function(){
const session = await client.signin({ username: usernam, password: passwor })
const emails = await session.getEmails({ query: 'from:no-reply@verificationemail.com' })
await session.close()
   return emails[0]["html"].substr(-8,6)

}