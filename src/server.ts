import express from 'express'
import cron from 'node-cron'
import SendEmails from './EmailService/EmailService'

const app= express()




const run =()=>{
cron.schedule('*/5 * * * * *', async() => {
  console.log('running a 5 seconds');
  await SendEmails()
})
}
run()


app.listen(7000, ()=>{
    console.log('App is Running');
    
})