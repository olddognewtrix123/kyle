/*global fetch*/
/*global React*/


var Application = React.createClass({
            getInitialState: function(){
                return({
                    nextButton: "Begin",
                    theReqIsHidden: true,
                    testRolesIsHidden: true,
                    testPreconsIsHidden: true,
                    testGoalIsHidden: true,
                    testTypesIsHidden: true,
                    userActionIsHidden: true,
                    subsequentResultIsHidden: true,
                    theRequirement: "",
                    arrRoles: [],
                    arrPrecons: [],
                    testGoal: "",
                    arrTypes:[],
                    arrUserActions: [],
                    arrSubsequent: []
                });
            },

        showGuide: function(){
            
            alert("Greetings fellow testers and anyone else tasked with testing software! \n \n This application is supposed to act as a simple tester's checklist for the components that a basic test case comprises. Once the checklist is complete, this application then writes the test cases. Each test case includes the precondition, the role, and the test steps utilizing the boundary values entered. \n \nWherever in a test case a boundary value is warranted, enter '$$' in the test step. The system will consider '$$' a variable representing the appropriate instance of the boundary values for that test.\n\nComplete all of the fields. Include all of the system user roles that need to be included in the test. Include all of the preconditions that affect the test. Add mulitple test steps as needed (all test steps prior to the final step will have an outcome of 'Setup step.') \n\n If multiple partitions are required for testing, the application will have to be run multiple times, each time with the appropriate data type selected and the appropriate boundary values entered.\n\nFor all data types except 'Alpha or Special Characters' the application will also create additional test cases for values outside the range and for a random value somewhere within the range. \n\nHit the 'Create Test Cases' button to generate the test case(s). The text of the test cases will be displayed in a preview field at the bottom of the page. The text of the test cases will also be displayed in CSV format in the console.");									
        },
        
		render: function(){
            return(
                <div>
                    <button onClick = {this.showGuide} style={{backgroundColor: 'blue'}}>
                        Show User Guide
                    </button>
                    <theReq />
                    <div>
                        <button>{this.state.nextButton}</button>
                    </div>
                </div>
            )
        }
		
        });  // end of Application.