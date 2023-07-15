import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
 
  const [contractType, setContractType] = useState('CALL');

  const [symbol, setSymbol] = useState('frxEURUSD');
  const [currency, setCurrency] = useState('USD');
  const [payoutType, setpayoutType] = useState('stake');
  const [durationUnit,  setDurationUnit] = useState('s');
  const [amount,  setAmount] = useState('');
  const [time,  setTime] = useState('');

  const [tradeMessage,  setMessage] = useState('');

  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => setOpen(false);



  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'purple',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  function copyToClipboard() {
    //const textToCopy = 'Hello, World!'; // Text to be copied

    navigator.clipboard.writeText(tradeMessage)
      .then(() => {
       // setCopySuccess(true);
       alert("Text copied to clipboard!")
        console.log('Copied to clipboard:', tradeMessage);
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  }
   
  
    const selectContractType = (event:any) => {
      setContractType(event.target.value);
    };

    const selectSymbol = (event:any) => {
      setSymbol(event.target.value);
    };

    const selectCurrency = (event:any) => {
      setCurrency(event.target.value);
    };

    const selectPayoutType = (event:any) => {
      setpayoutType(event.target.value);
    };

    const selectDurationUnit = (event:any) => {
      setDurationUnit(event.target.value);
    };

    const selectAmount = (event:any) => {
      setAmount(event.target.value);
    };

    const selectTime = (event:any) => {
      setTime(event.target.value);
    };

    const showTradeMessage = (event:any) => {
      event.preventDefault();

      var m = "Contract-deriv     \n"+'['+JSON.stringify(contractType) +','+ JSON.stringify(symbol)+','+ (Number(time))+','+ JSON.stringify(currency) +','+ (Number(amount))+',' + JSON.stringify(payoutType)+','+ JSON.stringify(durationUnit)+']';

      setMessage(m);

      

      
     setOpen(true);
     
    };




  return (
    <>
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className="text-white">
             Copy The text below 
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }} className="text-white">
           

            <span className="text-yellow-300">{tradeMessage}</span> 

             <br></br>

             <button onClick={copyToClipboard()} className="bg-white text-black p-2 border-xl mt-6 hover:shadow-xl hover:ml-2">Copy Text</button>
            </Typography>
          </Box>
        </Fade>
      </Modal>

    
        <main
      className={`flex min-h-screen w-screen  flex-col items-center justify-between p-24 ${inter.className}`}
    >


      <div className="lg:w-1/3 sm:w-screen">

      <form onSubmit={showTradeMessage}>

      <label htmlFor="selectOption">Contract Type:</label>
      <br></br>
      <select id="selectOption" value={contractType} onChange={selectContractType} className="w-full bg-black text-white mt-2 border-2 border-white p-2 rounded-sm text-xs">
      
        <option value="CALL">CALL</option>
        <option value="PUT">PUT</option>
       
      </select>

      <br></br><br></br>
      <label htmlFor="selectOption" className="mt-10">Symbol:</label>
      <br></br>
      <select id="selectOption" value={contractType} onChange={selectSymbol} className="w-full bg-black text-white mt-2 border-2 border-white p-2 rounded-sm text-xs">
      
      <option value="frxEURUSD">frxEURUSD</option>
      <option value="frxAUDUSD">frxAUDUSD</option>
      <option value="frxGBPUSD">frxGBPUSD</option>
      <option value="frxUSDJPY">frxUSDJPY</option>
      <option value="frxUSDCHF">frxUSDCHF</option>
      <option value="frxUSDCAD">frxUSDCAD</option>
      <option value="frxNZDUSD">frxNZDUSD</option>
      <option value="frxEURGBP">frxEURGBP</option>
      <option value="frxEURJPY">frxEURJPY</option>
      <option value="frxAUDCAD">frxAUDCAD</option>
      <option value="frxGBPJPY">frxGBPJPY</option>
      <option value="frxAUDJPY">frxAUDJPY</option>
      <option value="frxEURAUD">frxEURAUD</option>
      <option value="frxEURCAD">frxEURCAD</option>
      <option value="frxNZDJPY">frxNZDJPY</option>



        
       
      </select>
      <br></br><br></br>

      <label htmlFor="selectOption">Currency:</label>
      <br></br>
      <select id="selectOption" value={contractType} onChange={selectCurrency} className="w-full bg-black text-white mt-2 border-2 border-white p-2 rounded-sm text-xs">
      
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
       
      </select>


      <br></br><br></br>

<label htmlFor="selectOption">Payout Type:</label>
<br></br>
<select id="selectOption" value={contractType} onChange={selectPayoutType} className="w-full bg-black text-white mt-2 border-2 border-white p-2 rounded-sm text-xs">

  <option value="stake">Stake</option>
  <option value="payout">Payout</option>

 
</select>


<br></br><br></br>

<label htmlFor="selectOption">Duration Unit:</label>
<br></br>
<select id="selectOption" value={contractType} onChange={selectDurationUnit} className="w-full bg-black text-white mt-2 border-2 border-white p-2 rounded-sm text-xs">

  <option value="s">s</option>
  <option value="m">m</option>
  <option value="h">h</option>
  <option value="d">d</option>

 
</select>

<br></br><br></br>
<label htmlFor="selectOption">Amount:</label>
<br></br>

<input type="text" placeholder='amount' onChange={selectAmount} className='border-2 border-white bg-transparent text-white p-2 w-full text-xs' />



<br></br><br></br>

<label htmlFor="selectOption">Time:</label>
<br></br>

<input type="text" placeholder='time' onChange={selectTime} className='border-2 border-white bg-transparent text-white p-2 w-full text-xs' />
     
<input type="submit"  className="mt-4 bg-lime-600 w-full py-2 cursor-pointer hover:border-2 hover:border-lime-600 hover:bg-transparent"/>


</form>

      </div>
    
    </main>
    </>
  )
}
