const { styleClass } = require('../../utils');

module.exports = (root, opts) => {
    const appearance = {
        'appearance-none': 'none'
    };

    styleClass('appearance', appearance, root, opts);
};
