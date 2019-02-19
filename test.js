const test = require('ava')
const raas = require('./index')

test.serial('can get, regen, and set key', async (test) => {
  const firstKey = await raas.key.get('test', 'test')
  test.truthy(firstKey)

  const newKey = await raas.key.regenerate('test', 'test')
  test.not(firstKey, newKey)

  raas.key.set(newKey)
})

test('can create, get, view, and delete deployment', async (test) => {
  const deployment = await raas.deployments.create()
  test.truthy(deployment)

  const deploymentInfo = await raas.deployments.getInfo(deployment.code)
  test.is(deploymentInfo.memeIndex, 0)
  test.is(deploymentInfo.views, 0)

  await raas.deployments.view(deployment.code)
  const deploymentInfoAgain = await raas.deployments.getInfo(deployment.code)
  test.is(deploymentInfoAgain.views, 1)

  const { finalViews } = await raas.deployments.delete(deployment.code)
  test.is(finalViews, 1)

  await test.throwsAsync(async () => {
    await raas.deployments.getInfo(deployment.code)
  })
})

test('can list deployments', async (test) => {
  const deployment = await raas.deployments.create()

  const deployments = await raas.deployments.list()
  test.truthy(deployments)
  test.true(deployments.length >= 1)

  await raas.deployments.delete(deployment.code)
})

test('can create, get, view, and delete alias', async (test) => {
  const { code } = await raas.deployments.create()
  await raas.aliases.alias(code, 'test')

  const aliasInfo = await raas.aliases.getInfo('test')
  test.is(aliasInfo.code, code)

  await raas.aliases.delete('test')

  await test.throwsAsync(async () => {
    await raas.aliases.getInfo('test')
  })

  await raas.deployments.delete(code)
})

test('can list aliases', async (test) => {
  const { code } = await raas.deployments.create()
  await raas.aliases.alias(code, 'test2')

  const aliases = await raas.aliases.list()
  test.truthy(aliases)
  test.true(aliases.length >= 1)

  await raas.deployments.delete(code)
  await raas.aliases.delete('test2')
})