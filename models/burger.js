var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
    orm.insert("burgers",  vals, function(res) {
      cb(res);
    });
  },
  update: function(condition, id, cb) {
    condition = "devoured = true"
    orm.update("burgers", condition, id, function(res) {
      cb(res);
    });
  },
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;
