const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const StoreSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
        },
    },
    {
        timestamps: true, //TODO createdAt, updateAt
        versionkey: false,
    }
);
StoreSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", StoreSchema)