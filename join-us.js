
let form = document.querySelector('form');
// without input value
let user2 = document.querySelector('#user');
let emails2 = document.querySelector('#emails');
let year2 = document.querySelector('#year');
let mobileNumber2 = document.querySelector('#mobileNumber');
let CurrentLocation = document.querySelector('#location');
let CurrentRole = document.querySelector('#role');
let job2 = document.querySelector('#job');
let resume2 = document.querySelector('#resume');
let profile2 = document.querySelector('#profile');
let website2 = document.querySelector('#weblink');
let Github2 = document.querySelector('#github');
let Source2 = document.querySelector('#jsource');

//with value
let user = document.querySelector('#user').value;
let emails = document.querySelector('#emails').value;
let year = document.querySelector('#year').value;
let mobileNumber = document.querySelector('#mobileNumber').value;
let location2 = document.querySelector('#location').value;
let role2 = document.querySelector('#role').value;
let job = document.querySelector('#job').value;
let resume = document.querySelector('#resume').value;
let profile = document.querySelector('#profile').value;
let website = document.querySelector('#weblink').value;
let Github = document.querySelector('#github').value;
let Source = document.querySelector('#jsource').value;

//  form inputs  array
const formInput = [user2, emails2, year2, mobileNumber2, CurrentLocation, CurrentRole, job2, resume2, profile2, Source2];

// reset the error 
const resetElm = (elm1) => {
    elm1.classList.remove('invalid')
}
// adding the error
const invalid = (elm2) => {
    elm2.classList.add('invalid')
}
// email check
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const  validURL =(str)=> {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
  }

// form checking 
let isFormValid = false;
let isvalidationOn = false;






const validation = () => {
    // without input value
    let user2 = document.querySelector('#user');
    let emails2 = document.querySelector('#emails');
    let year2 = document.querySelector('#year');
    let mobileNumber2 = document.querySelector('#mobileNumber');
    let CurrentLocation = document.querySelector('#location');
    let CurrentRole = document.querySelector('#role');
    let job2 = document.querySelector('#job');
    let resume2 = document.querySelector('#resume');
    let profile2 = document.querySelector('#profile');
    let website2 = document.querySelector('#weblink');
    let Github2 = document.querySelector('#github');
    let Source2 = document.querySelector('#jsource');

    //with value
    let user = document.querySelector('#user').value;
    let emails = document.querySelector('#emails').value;
    let year = document.querySelector('#year').value;
    let mobileNumber = document.querySelector('#mobileNumber').value;
    let location2 = document.querySelector('#location').value;
    let role2 = document.querySelector('#role').value;
    let job = document.querySelector('#job').value;
    let resume = document.querySelector('#resume').value;
    let profile = document.querySelector('#profile').value;
    let website = document.querySelector('#weblink').value;
    let Github = document.querySelector('#github').value;
    let Source = document.querySelector('#jsource').value;

    // resume ender
    isFormValid = true;
    if (!isvalidationOn) return;

    // enter user data
    if (user == "") {
        document.getElementById('user-error').innerHTML = " ** Please fill the username field";
        invalid(user2);

        isFormValid = false;
        return false;
    }
    if ((user.length <= 2) || (user.length > 15)) {
        document.getElementById('user-error').innerHTML = " ** Username lenght must be between 2 and 20";
        invalid(user2);

        isFormValid = false;
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('user-error').innerHTML = " ** only characters are allowed";
        invalid(user2);

        isFormValid = false;
        return false;
    }



    if (emails == "") {
        document.getElementById('email-error').innerHTML = " ** Please fill the email `field";
        invalid(emails2)
        isFormValid = false;
        // emails2.focus();
        return false;
    }
    if (emails.indexOf('@') <= 0) {
        document.getElementById('email-error').innerHTML = " ** @ Invalid Position";
        invalid(emails2)
        isFormValid = false;
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('email-error').innerHTML = " ** . Invalid Position";
        invalid(emails2)
        isFormValid = false;
        return false;
    }
    if (!isValidEmail(emails)) {
        document.getElementById('email-error').innerHTML = " ** . Invalid Position ";
        invalid(emails2)
        isFormValid = false;
        return false;

    };

    // year of Graduation
    if (year == "") {
        document.getElementById('year-error').innerHTML = " ** Please fill the Year of Graduation";

        isFormValid = false;
        invalid(year2)
        return false;
    }

    // mobile

    if (mobileNumber == "") {
        document.getElementById('mobile-error').innerHTML = " ** Please fill the mobile NUmber field";

        isFormValid = false;
        invalid(mobileNumber2)
        return false;
    }
    if (isNaN(mobileNumber)) {
        document.getElementById('mobile-error').innerHTML = " ** user must write digits only not characters";

        isFormValid = false;
        invalid(mobileNumber2)
        return false;
    }
    if (mobileNumber.length != 10) {
        document.getElementById('mobile-error').innerHTML = " ** Mobile Number must be 10 digits only";

        isFormValid = false;
        invalid(mobileNumber2)
        return false;
    }

    // current loction

    if (location2 == "") {
        document.getElementById('location-error').innerHTML = " ** Please Fill The City Name";

        isFormValid = false;
        invalid(CurrentLocation)
        return false;
    }

    if (!isNaN(location2)) {
        location2
        document.getElementById('location-error').innerHTML = " ** only characters are allowed";

        isFormValid = false;
        invalid(CurrentLocation);
        return false;
    }

    // apply as
    if (job == "") {
        document.getElementById('job-error').innerHTML = " ** Please fill the Job Role ";

        isFormValid = false;
        invalid(job2)
        return false;
    }

    // Apply For

    if (role2 == "") {
        document.getElementById('role-error').innerHTML = " ** Please Fill The Designation Name";

        isFormValid = false;
        invalid(CurrentRole)
        return false;
    }

    if (!isNaN(role2)) {
        location2
        document.getElementById('location-error').innerHTML = " ** only characters are allowed";

        isFormValid = false;
        invalid(CurrentRole);
        return false;
    }

    //  for resume
    if (resume == "") {
        document.getElementById('resume-error').innerHTML = " ** Please Upload The Updated Resume";

        isFormValid = false;
        invalid(resume2)
        return false;
    }
        	// adding the size condition of file here
            if (resume2.files.length > 0) {
                for (let i = 0; i <= resume2.files.length - 1; i++) {
        
                    const fsize = resume2.files.item(i).size;
                    const file = Math.round((fsize / 1024));
                    // The size of the file.
                    if (file >= 10096) {
                        document.getElementById('resume-error').innerHTML = " ** Please Upload The Updated Resume  Under 10Mb";
                        document.querySelector('#resume').value=null;
                        isFormValid = false;
                return false;
                    }
                }
             
            }


  

	if (!validURL(profile)) {
        document.getElementById('profile-error').innerHTML = " ** Please Fill The Valid Linkedin URL";

        isFormValid = false;
        invalid(profile2)
        return false;
    }

    // finding source
    if (Source == "") {
        document.getElementById('jsource-error').innerHTML = " ** Please Fill the Source Name";

        isFormValid = false;
        invalid(Source2)
        return false;
    }




}
// looping of the Forminputs when enter the field 
formInput.forEach((item) => {
    item.addEventListener('input', () => {
        validation();
        resetElm(item);
        // make an array for doning the error text empity
        document.querySelector('#user-error').innerText = " ";
        document.querySelector('#email-error').innerText = " ";
        document.querySelector('#year-error').innerText = " ";
        document.querySelector('#mobile-error').innerText = " ";
        document.querySelector('#location-error').innerText = " ";
        document.querySelector('#role-error').innerText = " ";
        document.querySelector('#job-error').innerText = " ";
        document.querySelector('#resume-error').innerText = " ";
        document.querySelector('#profile-error').innerText = " ";
        document.querySelector('#jsource-error').innerText = " ";

    })
});

// for testing till resume testing 

// resume input value as .. 
const resumeInput = [user2, year2, job2, CurrentRole];

// reset error and adding error comming from above point

// checking the reusme inputs filed as 
let isResumeData = false;
let isResumeValidation = false;

//  rresume  validation
const Rvalidation = () => {
    let user3 = document.querySelector('#user');
    let year3 = document.querySelector('#year');
    let CurrentRole3 = document.querySelector('#role');
    let job3 = document.querySelector('#job');
    // let resume3 = document.querySelector('#resume');


    isResumeData = true;
if(!isResumeValidation) return;

    // enter user data
    if (user3.value == "") {
        document.getElementById('user-error').innerHTML = " ** Please fill the username field";
        invalid(user3);

        isResumeData = false;
        return false;
    }
    if ((user3.value.length <= 2) || (user3.value.length > 15)) {
        document.getElementById('user-error').innerHTML = " ** Username lenght must be between 2 and 20";
        invalid(user3);

        isResumeData = false;
        return false;
    }
    if (!isNaN(user3.value)) {
        document.getElementById('user-error').innerHTML = " ** only characters are allowed";
        invalid(user3);

        isResumeData = false;
        return false;
    }
    // year of Graduation
    if (year3.value == "") {
        document.getElementById('year-error').innerHTML = " ** Please fill the Year of Graduation";

        isResumeData = false;
        invalid(year3)
        return false;
    }

    // apply as
    if (job3.value == "") {
        document.getElementById('job-error').innerHTML = " ** Please fill the Job Role ";

        isResumeData = false;
        invalid(job3)
        return false;
    }

    // Apply For

    if (CurrentRole3.value == "") {
        document.getElementById('role-error').innerHTML = " ** Please Fill The Designation Name";

        isResumeData = false;
        invalid(CurrentRole3)
        return false;
    }

    if (!isNaN(CurrentRole3.value)) {
        location2
        document.getElementById('location-error').innerHTML = " ** only characters are allowed";

        isResumeData = false;
        invalid(CurrentRole3);
        return false;
    }


}
resumeInput.forEach((ritem) => {
    ritem.addEventListener('input', () => {
        Rvalidation();
        resetElm(ritem);
        document.querySelector('#user-error').innerText = " ";
        document.querySelector('#year-error').innerText = " ";
        document.querySelector('#role-error').innerText = " ";
        document.querySelector('#job-error').innerText = " ";
    

    })
})

// for resume changes 

let resumeFile = '';
// const fileSelector = document.getElementById('resume');

resume2.addEventListener('change', async (event) => {

isResumeValidation=true;
Rvalidation();
if(!isResumeData){
    console.log("object");
        document.querySelector('#resume').value=null;
    return;
}

    // @test 1

    // const fileList = event.target.files;
    // let job = document.querySelector('#job').value;
    // let user = document.querySelector('#user').value;
    // let year = document.querySelector('#year').value;
    // let role2 = document.querySelector('#role').value;

    try {

        // test-2
        let job = document.querySelector('#job').value;
        let user = document.querySelector('#user').value;
        let year = document.querySelector('#year').value;
        let role2 = document.querySelector('#role').value;

        const fileList = event.target.files;
        console.log(fileList);
        // test-2 
        const formData = new FormData()
        formData.append('image', fileList[0]);
        formData.append('name', user);
        formData.append('job_role', job);
        formData.append('job_designation', role2);
        formData.append('year', year);

        let options2 = {
            method: 'POST',
            body: formData
        }

        const fileResponce = await fetch('https://api.nixonbit.com/api/v1/nixonbit/upload?image', options2)
        const fileResponceData = await fileResponce.json();
        if (fileResponce.status === 200) {
            resumeFile = fileResponceData.location;
            // console.log(resumeFile);

        }

    } catch (error) {

    }

});

// for resume changes end




// submission of form
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    isvalidationOn = true;
    validation();

    // resumeData();

    if (!isFormValid) {
        // console.log("first");
        // resumeData(resume2);
        document.querySelector('#thanks').innerHTML = '** Some Field are missing ';
        setTimeout(() => {
            document.querySelector('#thanks').innerText = ''
        }, 2000)
        return;
    }


    try {
        // adding post data 

        //with value
        let user = document.querySelector('#user').value;
        let emails = document.querySelector('#emails').value;
        let year = document.querySelector('#year').value;
        let mobileNumber = document.querySelector('#mobileNumber').value;
        let location2 = document.querySelector('#location').value;
        let role2 = document.querySelector('#role').value;
        let job = document.querySelector('#job').value;
        let resume = document.querySelector('#resume').value;
        let profile = document.querySelector('#profile').value;
        let website = document.querySelector('#weblink').value;
        let Github = document.querySelector('#github').value;
        let Source = document.querySelector('#jsource').value;
        // const resumeFile = '';

        const data = {
            // data which i want to post 
            name: user,
            email: emails,
            graduation: year,
            phone: mobileNumber,
            applying_for: role2,
            applying_as: job,
            linkdin_profile: profile,
            source: Source,
            other_links: [website, Github],
            current_location: location2,
            resume: resumeFile,

        }
        let options = {
            method: 'POST',
            headers: {
                // 'Content-Type': 
                //     'application/json;charset=utf-8'
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('https://api.nixonbit.com/api/v1/nixonbit/new_applicant', options);
        const responseData = await response.json();
        console.log(responseData);
        if (responseData) {
            form.reset()
            document.querySelector('#navin').innerHTML = 'Your Application has been submited'
            console.log('120');
            setTimeout(() => {
                document.querySelector('#navin').innerText = ''
            }, 3000)
            return true;
        }

    } catch (error) {
        console.log(error);

    }
});

// adding drop down value
window.onload = function () {
    //Reference the DropDownList.

    //Determine the Current Year.
    let currentYear = (new Date()).getFullYear();
    let start = "<option value=''></option>";

    //Loop and add the Year values to DropDownList.
    for (let i = 0; i <= 30; i++) {
        // var option = document.createElement("OPTION");
        // option.innerHTML = i;
        // option.value = i;
        // ddlYears.appendChild(option);
        start += "<option value=" + parseInt(currentYear - i) + ">" + parseInt(currentYear - i) + "</option>"

    }
    year2.innerHTML = start;

};


