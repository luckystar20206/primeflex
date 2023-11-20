const { styleClass } = require('../../../utils');

module.exports = (root, opts) => {
    const sizes = {
        'bg-auto': 'auto',
        'bg-cover': 'cover',
        'bg-contain': 'contain'
    };

    styleClass('background-size', sizes, root, opts, true);
};
