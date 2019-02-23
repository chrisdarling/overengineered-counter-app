import fs from 'fs';

export const readFileAsync = (fileName, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }   
        })
    })
}