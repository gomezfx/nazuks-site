exports.onCreateNode =({ node, getNode, boundActionCreators }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = boundActionCreators;
        node.collection = getNode(node.parent).sourceInstanceName;
    }
}