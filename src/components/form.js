import React, { Component } from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";

class Form extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <form>
              <div className="divBorder">
                <div className="formDiv">
                  <label className="formText">What is your status?</label>
                </div>
                <div className="formDiv">
                  <input
                    className="formText"
                    type="radio"
                    name="immediately"
                    value="immediately"
                  />
                  <label className="formText">Need help Immediately</label>
                </div>
                <div className="formDiv">
                  <input
                    className="formText"
                    type="radio"
                    name="hours"
                    value="hours"
                  />
                  <label className="formText">Within 1-2 hours</label>
                </div>
                <div className="formDiv">
                  <input
                    className="formText"
                    type="radio"
                    name="days"
                    value="days"
                  />
                  <label className="formText">In the next day or two</label>
                </div>
                <div className="formDiv">
                  <input
                    className="formText"
                    type="radio"
                    name="good"
                    value="good"
                  />
                  <label className="formText">
                    Do not need assistence at this time
                  </label>
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label className="formText mar">
                    Name of person entering data
                  </label>
                  <input className="formText" type="text" name="name" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label className="formText mar">Address</label>
                  <input className="formText" type="text" name="location" />
                </div>
              </div>

              <div className="divBorder">
                <div className="formDiv">
                  <label className="mar">Address</label>
                  <input type="text" name="location" />
                </div>
              </div>

              <div className="divBorder">
                <div className="formDiv">
                  <label className="formText mar">
                    Number of people at location
                  </label>
                  <input className="formText" type="text" name="number" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>
                    Do you have elderly/diabled/infants in your party?
                  </label>
                  <input type="radio" name="yesDisabled" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noDisabled" value="No" />
                  <label>No</label>
                </div>

                <div className="formDiv">
                  <label>
                    If you answered yes to the above question please give a
                    brief description of the party members
                  </label>
                </div>
                <div className="formDiv">
                  <textarea rows="10" cols="50" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Are there any injured parties?</label>
                  <input type="radio" name="yesInjured" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noInjured" value="No" />
                  <label>No</label>
                </div>
                <div className="formDiv">
                  <label>
                    If there are injured parties please give a brief description
                    of the injuries
                  </label>
                </div>

                <div className="formDiv">
                  <textarea rows="10" cols="50" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Does anyone need medication?</label>
                  <input type="radio" name="yesMeds" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noMeds" value="No" />
                  <label>No</label>
                </div>
                <div className="formDiv">
                  <label>
                    If anyone needs medication please give a brief description
                    of the medication needed
                  </label>
                </div>
                <div className="formDiv">
                  <textarea rows="10" cols="50" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Do you have power?</label>
                  <input type="radio" name="yesPower" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noPower" value="No" />
                  <label>No</label>
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Do you have heat/air conditioning?</label>
                  <input type="radio" name="yesHeat" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noHeat" value="No" />
                  <label>No</label>
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Do you have food and water?</label>
                  <input type="radio" name="yesFood" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noFood" value="No" />
                  <label>No</label>
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label className="formText">
                    If you answered yes to the above question please give a
                    brief description of your needs
                  </label>
                </div>
                <div className="formDiv">
                  <textarea rows="10" cols="50" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Do you have any pets with you?</label>
                  <input type="radio" name="yesPets" value="Yes" />
                  <label>Yes</label>
                  <input type="radio" name="noPets" value="No" />
                  <label>No</label>
                </div>
                <div className="formDiv">
                  <label className="formText">
                    If you answered yes to the above question please give a
                    brief description of your pets
                  </label>
                </div>
                <div className="formDiv">
                  <textarea rows="10" cols="50" />
                </div>
              </div>
              <div className="divBorder">
                <div className="formDiv">
                  <label>Other</label>
                </div>
                <div className="formDiv">
                  <textarea className="formText" rows="10" cols="50" />
                </div>
              </div>
              <Button className="submitButton" type="submit">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Form;
