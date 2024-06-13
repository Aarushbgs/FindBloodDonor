import React from 'react'
import './Tips.css';
const Tips = () => {
  return (
    <div className='tips-Section'>
        <h1>Tips</h1>
        <p>Here are some tips to put your mind at ease during the blood donation process</p>
    <div className='Tips-box'>

        <div className='Tips-innerbox'>
            <h1>Day before</h1>
            <div className='Tips-content'>
            <p>-Have an iron-rich diet such as beans, spinach or meat, poultry.</p>
            
            <p>-Have a proper sleep of at least 8 hours.</p>
            <p>-Include more liquids in your diet </p>
            <p>-Refrain from consuming alcohol and caffeinated beverages at least 24 hours before donating blood.</p>


            </div>
        </div>

        <div className='Tips-innerbox'>
            <h1>On the Donation Day</h1>
            <div className='Tips-content'>
            <p>-Do carry your identify identification forms e.g. driver’s license</p>
            <p>-Drink 2 cups of water before donating blood</p>
            <p>-Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation </p>


            </div>
        </div>

        <div className='Tips-innerbox'>
            <h1>Day After</h1>
            <div className='Tips-content'>
            <p>-Reward yourself with a snack as refreshment immediately.</p>
            <p> -Drink more liquids over a period of 24 hours</p>
            <p>-Remove the bandage after few hours</p>
            <p>-Don’t do vigorous workout & give your body rest</p>


            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Tips