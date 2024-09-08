// Sample data for company structure
const data = [
    {
        "id": 1,
        "name": "Company A",
        "children": [
            {
                "id": 2,
                "name": "Marketing Department",
                "children": [
                    {
                        "id": 3,
                        "name": "Content Creation",
                        "children": [
                            {
                                "id": 4,
                                "name": "Content Writer 1",
                                "children": []
                            },
                            {
                                "id": 5,
                                "name": "Content Writer 2",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Company B",
        "children": [
            {
                "id": 7,
                "name": "Sales Department",
                "children": [
                    {
                        "id": 8,
                        "name": "Regional Sales",
                        "children": [
                            {
                                "id": 9,
                                "name": "Sales Manager 1",
                                "children": []
                            },
                            {
                                "id": 10,
                                "name": "Sales Manager 2",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Recursive function to create the tree structure
function createTree(parentElement, structure) {
    const ul = document.createElement('div');
    ul.className = 'children';

    structure.forEach(node => {
       
        const li = document.createElement('div');
        li.className = 'node';

        const item = document.createElement('div');
        item.className = node.children.length > 0 ? 'folder' : 'file';
        item.innerText = node.name;

        // Click to toggle visibility of children
        item.onclick = function () {
            const children = li.querySelector('.children');
            if (children) {
                children.classList.toggle('hidden');
            }
        };

        li.appendChild(item);

        // If node has children, recursively create the tree for the children
        if (node.children.length > 0) {
            createTree(li, node.children);
        }

        ul.appendChild(li);
    });

    console.log(ul);
    parentElement.appendChild(ul);
}

// Initial call to create the tree structureā
const treeContainer = document.getElementById('treeContainer');
createTree(treeContainer, data);
