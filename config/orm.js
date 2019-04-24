const connection = require("./connection");

const orm = {
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

orm.selectWhere("burgers", "burger_name", "Deluxe");
