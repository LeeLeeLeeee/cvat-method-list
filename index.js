const express = require("express");
const app = express();
const port = 2020;
const fs = require('fs')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/read", (req, res) => {
    let files_content = {}
    const folders = ['cvat-canvas-list', 'cvat-core-list', 'authentication', 'dataset_manager', 'dataset_repo', 'engine', 'lambda_manager', 'log_viewer', 'opencv', 'restrictions', 'training'];
    for(const folder_name of folders) {
        const files = fs.readdirSync(`${__dirname}/${folder_name}`, 'utf-8');
        files_content[folder_name] = {}
        for(const file_name of files) {
            const data = fs.readFileSync(`${__dirname}/${folder_name}/${file_name}`);
            files_content[folder_name][file_name] = data.toString();
        }
    }
    return res.json(files_content)
});

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);