const express = require('express')
const app = express()
const port = 3000
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
const shell = require('shelljs');
let id = 0;
const dataJson = {};
const route = "/cypress/screenshots/vrt_color_pallete_spec.js/"
var cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
    await shell.exec('npx cypress run --env id=' + id);
    let data = await getDiff();
    dataJson[id] = {porcent: data, imageOne: route + "primera_paleta" + id + ".png", imageTwo: route + "segunda_paleta" + id + ".png", imageDiference: route + "diferencias" + id + ".png"};
    res.send(dataJson);
    id += 1;
})

app.delete('/', async(req, res) => {
    id = 0;
    for(var key in dataJson) {
        delete dataJson[key];
    }
    await shell.exec('rm -r cypress/screenshots/vrt_color_pallete_spec.js');
    res.send('success');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Tomado de https://www.npmjs.com/package/resemblejs 
const getDiff = async () => {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "less"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function

    const data = await compareImages(
        await fs.readFile("." + route + "primera_paleta" + id + ".png"),
        await fs.readFile("." + route + "segunda_paleta" + id + ".png"),
        options
    );
    await fs.writeFile("." + route + "diferencias" + id + ".png", data.getBuffer());
    console.log("***********data********* " + data.misMatchPercentage);

    var data1 = data.misMatchPercentage + "%";

    return data1;
}

