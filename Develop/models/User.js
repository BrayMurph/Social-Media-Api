const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema (
    {

    },
    {

    }
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;