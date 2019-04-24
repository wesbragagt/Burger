const orm = require("../config/orm");

const burger = {
    all: cb => {
        orm.all("burgers", res => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.update("burgers", id, cb);
    }
};

module.exports = burger;
