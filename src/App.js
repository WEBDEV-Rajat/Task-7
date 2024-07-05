import { ABI } from './utils/abi';
import ConnectButton from './components/connectButton';
import StudentForm from './components/Studentform';
import StudentList from './components/Studentlist';
import ContractActions from './components/contractActions';
import React, {useState} from 'react';
import './App.css';

function App() {

  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS?.toString() || '';

  const [contract,setContract] = useState(null);
  const [students, setStudents] = useState([]);

  const initialize = async () => {
    try {
      let signer = null;
      let provider;
      if (window.ethereum == null) {
        console.log('MetaMask not installed; using read-only defaults');
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        setUser(signer);
      }
    } catch (error) {
      console.error('Error getting the data: ', error);
    }
  };

  const initializeContract = async () => {
    try {
      if (user) {
        const con = new ethers.Contract(contractAddress, ABI);
        setContract(con);
        Students(con);
      } else {
        console.error('User is not initialized');
      }
    } catch (error) {
      console.error("Error connecting with the contract", error)
    }

  };
  const Students = async(contract) => {
    const StudentCount = await contract.StudentCount();
    const StudentArray = [];
    for (let i = 0; i < StudentCount; i++) {
      const student = await contract.students(i);
    }
  }

  const addGrade = async(studentName, subject, grade) => {
    try {
      if (contract) {
        const tx = await contract.postProduct(studentName, subject, ethers.parseEther(grade));
        await tx.wait();
       Students(contract); 
      }
    } catch (error) {
      console.error("Error adding the student grade :",error)
    }

  };
 
  const getGrade = async (StudentId) => {
    try {
      if (contract) {
        const student = students.find(s => s.id === studentId);
        const tx = await contract.getGrade(StudentId, { value: ethers.parseEther(product.price) });
        await tx.wait()
        loadProducts(contract);
      }
    } catch (error) {
      console.error("Error purchasing the product :", error)
    }
  };
  
  const averageGrade = async(subject) => {
    try{
      if(contract){
        const tx = await contract.averageGrade(subject);
        await tx.wait();
        Students(contract);
      }
    }
    catch(error){
        console.error("Error deleting the product : ", error)
    }
  };

  return (
    <div className="container">
      <h1>Ethereum Report Card</h1>
      <ConnectButton initialize={initialize} />
      <ContractActions initializeContract={initializeContract} contract={contract} />
      <StudentForm addGrade={addGrade} />
      <StudentList students={students} getGrade={getGrade} averageGrade={averageGrade}/>
    </div>
  );
}

export default App;
