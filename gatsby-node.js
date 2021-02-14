'use strict';

require('source-map-support').install();
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017'
    }
});

exports.createPages = require('./createPages').createPages;

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    const crypto = require(`crypto`);

    if (node.internal.type === 'StrapiArticle') {
        const newNode = {
            id: createNodeId(`StrapiArticleContent-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node.content || ' ',
                type: 'StrapiArticleContent',
                mediaType: 'text/markdown',
                contentDigest: crypto
                    .createHash('md5')
                    .update(node.content || ' ')
                    .digest('hex')
            }
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode
        });
    }
};
