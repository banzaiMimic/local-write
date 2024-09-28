import fs from 'fs/promises'
import { readFile } from 'fs/promises'

const makeLocalWrite = ({
  output
}) => {

  const overwrite = async({str}) => await fs.writeFile( output, str )
  const readJson = async() => {
    const data = await readFile(output)
    return JSON.parse(data)
  }

  return Object.freeze({
    overwrite,
    readJson
  })

}

export default makeLocalWrite