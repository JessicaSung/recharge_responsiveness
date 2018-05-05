import React, { Component } from 'react';
import '../App.css';

class Form extends Component {
  render() {
    return (
      <div className='divBorder'>
                <form>
                  <div className='divBorder'>
                  <div className='formDiv'>
                  <label className='formText'>What is your status?</label>
                  </div>
                  <div className='formDiv'>
                  <input  className='formText' type='radio' name='immediately' value='immediately'/>
          <label  className='formText'>Immediately</label>
          </div>
          <div className='formDiv'>
          <input  className='formText' type='radio' name='hours' value='hours'/>
          <label  className='formText'>1-2 hours</label>
          </div>       
                   <div className='formDiv'>
          <input    className='formText'type='radio' name='days' value='days'/>
          <label  className='formText'>In the next day or two</label>
          </div>
          <div className='formDiv'>
          <input  className='formText' type='radio' name='good' value='good'/>
          <label  className='formText'>Do not need assistence at this time</label>
          </div>
          </div>
          <div className='divBorder'>
                  <div className="formDiv"> 
          <label className='formText'>Location</label>
          <input  className='formText' type='text' placeholder='address, lat, long, etc...'name='location'/>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Number of people at location</label>
          <input  className='formText' type='text'name='number'/>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Do you have elderly/diabled/infants in your party?</label>
          <input  className='formText' type='radio' name='yesDisabled' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input  className='formText'type='radio' name='noDisabled' value='No'/>
          <label  className='formText'>No</label>
          </div>         
>          <div className='formDiv'>
          <label  className='formText'>If you answered yes to the above question please give a brief description of the party members</label>
          </div>
          <div  className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label className='formText'>Are there any injured parties?</label>
          <input  className='formText' type='radio' name='yesInjured' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input  className='formText'type='radio' name='noInjured' value='No'/>
          <label  className='formText'>No</label>
          </div>
          <div className='formDiv'>
          <label  className='formText'>If there are injured parties please give a brief description of the injuries</label>
          </div>         
          <div  className='formDiv'>
          <textarea  className='formText' rows='10' cols='50'></textarea>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Does anyone need medication?</label>
          <input   className='formText'type='radio' name='yesMeds' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input  className='formText' type='radio' name='noMeds' value='No'/>
          <label  className='formText'>No</label>
          </div>
          <div className='formDiv'>
          <label  className='formText'>If anyone needs medication please give a brief description of the medication needed</label>
          </div>
          <div className='formDiv'>
          <textarea   className='formText'rows='10' cols='50'></textarea>
          </div>
          </div>
          <div className='divBorder'>
<div className='formDiv'>
          <label  className='formText'>Do you have power?</label>
          <input  className='formText' type='radio' name='yesPower' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input  className='formText' type='radio' name='noPower' value='No'/>
          <label  className='formText'>No</label>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Do you have heat/air conditioning?</label>
          <input   className='formText'type='radio' name='yesHeat' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input   className='formText'type='radio' name='noHeat' value='No'/>
          <label  className='formText'>No</label>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Do you have food and water?</label>
          <input   className='formText'type='radio' name='yesFood' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input  className='formText' type='radio' name='noFood' value='No'/>
          <label  className='formText'>No</label>
          </div>
          <div className='formDiv'>
          <label  className='formText'>If you answered no to the above question please give a brief description of your needs</label>
          </div>
          <div  className='formDiv'>
          <textarea   className='formText'rows='10' cols='50'></textarea>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'>
          <label  className='formText'>Do you have any pets with you?</label>
          <input  className='formText' type='radio' name='yesPets' value='Yes'/>
          <label  className='formText'>Yes</label>
          <input   className='formText'type='radio' name='noPets' value='No'/>
          <label  className='formText'>No</label>
          </div>         
          <div className='formDiv'>
          <label  className='formText'>If you answered no to the above question please give a brief description of your pets</label>
          </div>
          <div  className='formDiv'>
          <textarea   className='formText'rows='10' cols='50'></textarea>
          </div>
          </div>
          <div className='divBorder'>
          <div className='formDiv'> 
                    <label  className='formText'>Other</label>
          </div>
          <div className='formDiv'>
          <textarea  className='formText' rows='10' cols='50'></textarea>
          </div>
          </div>

          
        </form>
      </div>
    );
  }
}

export default Form;
