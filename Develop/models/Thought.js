const {Schema, model, Types} = require('mongoose');
const moment = require('moment')

const reactionSchema = new Schema (
    {

    },
    {

    }
)

const thoughtSchema = new Schema (
    {

    },
    {

    }
)

thoughtSchema.virtual('reactionCount').get(function() {
        return this.reactions.length;
    })

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
