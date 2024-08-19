const treeData = {
    name: "Root",
    children: [
        {
            name: "Child 1",
            children: [
                {
                    name: "Child 1.1",
                    children: []
                },
                {
                    name: "Child 1.2",
                    children: [
                        {
                            name: "Child 1.2.1",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Child 2",
            children: [
                {
                    name: "Child 2.1",
                    children: []
                }
            ]
        }
    ]
};

// Recursive function to access values
export default treeData