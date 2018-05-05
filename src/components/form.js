import React, { Component } from 'react';

import './App.css';

class Form extends Component {
  render() {
    return (
      <div>
                <form>
                  <div className="formDiv"> 
          <label>Location</label>
          <input type='text' placeholder='address, lat, long, etc...'name='location'/>
          </div>
          <div className='formDiv'>
          <label>Number of people at location</label>
          <input type='text'name='number'/>
          </div>
          <div className='formDiv'>
          <label>Do you have elderly/diabled/infants in your party?</label>
          <input type='radio' name='yesDisabled' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noDisabled' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>If you answered yes to the above question please give a brief description of the party members</label>
          </div>
          <div  className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
          <div className='formDiv'>
          <label>Are there any injured parties?</label>
          <input type='radio' name='yesInjured' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noInjured' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>If there are injured parties please give a brief description of the injuries</label>
          </div>
          <div  className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
          <div className='formDiv'>
          <label>Does anyone need medication?</label>
          <input type='radio' name='yesMeds' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noMeds' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>If anyone needs medication please give a brief description of the medication needed</label>
          </div>
          <div className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
<div className='formDiv'>
          <label>Do you have power?</label>
          <input type='radio' name='yesPower' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noPower' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>Do you have heat/air conditioning?</label>
          <input type='radio' name='yesHeat' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noHeat' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>Do you have food and water?</label>
          <input type='radio' name='yesFood' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noFood' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>If you answered no to the above question please give a brief description of your needs</label>
          </div>
          <div  className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
          <div className='formDiv'>
          <label>Do you have any pets with you?</label>
          <input type='radio' name='yesPets' value='Yes'/>
          <label>Yes</label>
          <input type='radio' name='noPets' value='No'/>
          <label>No</label>
          </div>
          <div className='formDiv'>
          <label>If you answered no to the above question please give a brief description of your pets</label>
          </div>
          <div  className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>
          <div className='formDiv'> 
                    <label>Other</label>
          </div>
          <div className='formDiv'>
          <textarea rows='10' cols='50'></textarea>
          </div>

          
        </form>
      </div>
    );
  }
}

export default Form;
