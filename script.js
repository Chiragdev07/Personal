import Data from './Data.js';

console.log(Data);


const Data2 = [
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
    }
];


let Maincontainer=document.getElementById("main");




// Updated Driller function to check for 'children' property
function Driller(node,count) {
   let counter=0;
   
    if (node && typeof node === 'object') {

       
        // Check if the node has a 'children' property
        if (node.hasOwnProperty('children')) {
            console.log("Node with 'children' property found:", node.name);
            
            // Recursively process children if they exist and are arrays
            if (Array.isArray(node.children)) {
                node.children.forEach(child => Driller(child));
            }
        }

        
    }
}

// Function to start traversing the array
function array_traverse(array) {
    if (Array.isArray(array)) {
        // array.forEach(item => Driller(item));

        for(let count=0; count<array.length; count++){
            Driller(array[count],count);
        }
    } else {
        console.log("The provided input is not an array.");
    }
}

// Call the function with Data2
array_traverse(Data);



