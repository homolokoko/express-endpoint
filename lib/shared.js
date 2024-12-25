import _ from 'lodash'

class Shared {
    format(list) {
        return _.map(list, (item) => {
            return { value: item._id, text: item.name }
        })
    }
}

module.exports = Shared