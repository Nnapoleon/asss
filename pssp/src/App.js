import Swal from 'sweetalert2'
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Hello from './components/hello';
import HelloClass from './components/HelloClass';
import Butoon from './components/Butoon';
import Bobo from './components/Bobo';
import Data from './assets/data';
import Listing from './pages/Listing';
import Form from './components/Form';
import ApiListing from './pages/ApiListing';

 function ClickMe(e){
   e.preventDefault();
   Swal.fire(
    'Good job!',
    'You clicked the button!', Data ,
    'success'
  );
  console.log(Data);
 } 
 function ClickNow(e){
  e.preventDefault();
  console.log(Data);


 }

function App() {
  return (
    <div className="App">
     
     {/* <Header/>
        <Hello message="urwuho" thisone="urujyo"/>
        <HelloClass name="buenos"/>
        <Butoon color="red" 
                width="500px"
                txtcolor="green"
                radius="12px"
                text="mugabo"
                onClick={ClickMe}/>
        
        <Bobo color="red" 
                width="500px"
                txtcolor="green"
                radius="12px"
                text="fhffffg"
                onClick={ClickNow}/> 

      </header> 
      
    
      <Listing onClick={ClickNow}/>
      

     */}
     <Form/>
     <ApiListing/>

<Footer/>

    </div>
  );
}

export default App;
