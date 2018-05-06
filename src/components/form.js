import React, { Component } from 'react';



class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e)=>this.props.submitForm(e)}>
          <div className='divBorder'>
            <div className='formDiv'>
              <label className='formText'>What is your status?</label>
            </div>
            <div className='formDiv'>
              <input className='formText' type='radio' name='status' value='immediately' />
              <label className='formText'>Need help Immediately</label>
            </div>
            <div className='formDiv'>
              <input className='formText' type='radio' name='status' value='hours' />
              <label className='formText'>Within 1-2 hours</label>
            </div>
            <div className='formDiv'>
              <input className='formText' type='radio' name='status' value='days' />
              <label className='formText'>In the next day or two</label>
            </div>
            <div className='formDiv'>
              <input className='formText' type='radio' name='status' value='good' />
              <label className='formText'>Do not need assistence at this time</label>
            </div>
          </div>

          <div className='divBorder'>
            <div className="formDiv">
              <label className='formText mar'>Name of person entering data</label>
              <input className='formText' type='text' name='name' />
            </div>
          </div>

          <div className='divBorder'>
            <div className="formDiv">
              <label className='formText mar'>Address</label>
              <input className='formText' type='text' name='address' />
            </div>
          </div>


          <div className='divBorder'>
            <div className='formDiv'>
              <label className='formText mar'>Number of people at location</label>
              <input className='formText' type='text' name='number' />
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Do you have elderly/diabled/infants in your party?</label>
              <input type='radio' name='Disabled' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Disabled' value='No' />
              <label>No</label>
            </div>

            <div className='formDiv'>
              <label>If you answered yes to the above question please give a brief description of the party members</label>
            </div>
            <div className='formDiv'>
              <textarea name='disComment'rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Are there any injured parties?</label>
              <input type='radio' name='Injured' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Injured' value='No' />
              <label>No</label>
            </div>
            <div className='formDiv'>
              <label>If there are injured parties please give a brief description of the injuries</label>
            </div>
            <div className='formDiv'>
              <textarea name='injComment'rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Does anyone need medication?</label>
              <input type='radio' name='Meds' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Meds' value='No' />
              <label>No</label>
            </div>
            <div className='formDiv'>
              <label>If anyone needs medication please give a brief description of the medication needed</label>
            </div>
            <div className='formDiv'>
              <textarea name='medComment'rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Do you have power?</label>
              <input type='radio' name='Power' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Power' value='No' />
              <label>No</label>
            </div>
            <div className='formDiv'>
              <label>Comments</label>
            </div>
            <div className='formDiv'>
              <textarea name='powerComment'className='formText' rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Do you have heat/air conditioning?</label>
              <input type='radio' name='Heat' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Heat' value='No' />
              <label>No</label>
            </div>
            <div className='formDiv'>
              <label>Comments</label>
            </div>
            <div className='formDiv'>
              <textarea name='heatComment'className='formText' rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Do you have food and water?</label>
              <input type='radio' name='Food' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Food' value='No' />
              <label>No</label>
            </div>

            <div className='formDiv'>
              <label className='formText' >If you answered yes to the above question please give a brief description of your needs</label>
            </div>
            <div className='formDiv'>
              <textarea name='foodComment'rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Do you have any pets with you?</label>
              <input type='radio' name='Pets' value='Yes' />
              <label>Yes</label>
              <input type='radio' name='Pets' value='No' />
              <label>No</label>
            </div>
            <div className='formDiv'>
              <label className='formText'>If you answered yes to the above question please give a brief description of your pets</label>
            </div>
            <div className='formDiv'>
              <textarea name='petComment'rows='10' cols='50'></textarea>
            </div>
          </div>

          <div className='divBorder'>
            <div className='formDiv'>
              <label>Other</label>
            </div>
            <div className='formDiv'>
              <textarea name='other'className='formText' rows='10' cols='50'></textarea>
            </div>
          </div>
          <button className='submitButton' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
