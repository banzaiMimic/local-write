import makeLocalWrite from "./util/makeLocalWrite.js"

const output = `${process.cwd()}/output/example.json`

const localWrite = makeLocalWrite({output})

const writeContent = {
  hello: 'friend'
}
const contentStr = JSON.stringify(writeContent)

// ---

console.log('[ basic fs read / write example ] ---')

const example = async() => {
  await localWrite.overwrite({str: contentStr})
  console.log(`  wrote ${contentStr} to file:`, output)
  console.log(`  reading from file ${output}:`, await localWrite.readJson())
  console.log(`  --- [fin]`)
  console.log('---')
}

example()