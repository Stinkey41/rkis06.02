const jsonfile = require('jsonfile')

const cgetcarDB = () => {

    let data = jsonfile.readFileSync('/models/car.json', (err, obj) =>{
        if (err) {
            console.error(err);
            throw err;
        }
    }
    );
};
if (!id) throw 'Нет нужного параметра';


    return data[id];

module.exports = {getcarDB}
