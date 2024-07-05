export const ABI = [
    
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "subject",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "grade",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "subject",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "grade",
                    "type": "uint256"
                }
            ],
            "name": "addGrade",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_subject",
                    "type": "string"
                }
            ],
            "name": "averageGrade",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_subject",
                    "type": "string"
                }
            ],
            "name": "getGrade",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "student",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "subject",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "grade",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "studentCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "students",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "subject",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "grade",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_studentName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_subject",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_grade",
                    "type": "uint256"
                }
            ],
            "name": "updateGrade",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
]
