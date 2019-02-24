import { readFileAsync } from '../helpers'
import paths from '../config/paths'

let manifest;
const options = {}

const loadManifest = async () => {
    if (manifest && options.cache) return manifest

    const manifestPath = `${paths.clientBuild}/manifest.json`
    try {
        const fileData = await readFileAsync(manifestPath, 'utf8')
        const parsedData = JSON.parse(fileData)
        return Object.values(parsedData)
    } catch {
        throw new Error('App manifest could not be found')
    }
}

export const getSources = () => {
    manifest = manifest || loadManifest()
    return manifest
}

export const getJavaScriptFiles = (sources) => {
    return sources
        .filter((file) => file.match(/\.js$/))
}

const manifestHelpers = () => {
    const defaults = {
        cache: true,
    }

    manifest = null
    Object.assign(options, defaults, { manifest })
    return async (req, res, next) => {
        const sources = await getSources()
        const JSFiles = getJavaScriptFiles(sources)
        res.locals.JSFiles = JSFiles
        next()
    }
}

export default manifestHelpers