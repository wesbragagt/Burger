const connection = require("./connection");

const orm = {
    all: (tableInput, cb) => {
        let queryStr = "SELECT * FROM ??";
        connection.query(queryStr, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    selectWhere: (tableInput, colToSearch, valOfCol) => {
        let queryStr = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(
            queryStr,
            [tableInput, colToSearch, valOfCol],
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

// ALL
// CREATE
// UPDATE

// orm.all("burgers");
module.exports = orm;
