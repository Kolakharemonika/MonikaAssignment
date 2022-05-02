# MonikaAssignment
Personal Details Page: 
Create a form to accept
● Full Name (only alphabets and spaces allowed, min two words each with min 4 chars)
● Email (Email validation)
● Phone number (Pay attention to this format as per below instructions)
○ Only numbers to be allowed to type
○ make the number appear like (123) - 456 - 7890
■ the user is not allowed to add spaces/brackets/hyphens, that should be handled by the script
and it should happen in real time and not after all the 10 digits are typed in.
○ The first 3 digits represent the mobile provider and its logo should appear beside the box, based on
following conditions
■ if the 3 digits fall between 621 - 799, then its Reliance Jio
■ if the 3 digits fall between 801 - 920, then its Idea
■ if the 3 digits fall between 921 - 999 then its Vodafone
■ everything else is an invalid number.
○ The next 3 digits represent the state in India.
■ 001 to 999 represents state there has to be only 36 valid
numbers (28 states and 8 UTs)
■ show the state name beside the mobile provider beside the box, eg Jio, Maharashtra.
■ everything else is an invalid number
○ Last 4 digits could be any combination.
● Submit Button

Thank you page
Once the user submits the form, pass the values to a new page eg 'thank you' page, create a 4 digit random number
(show it only on console log) and based on the form values, write following message:
Dear <First name of the user and not full name>,
Thank you for your inquiry. A 4 digit verification number has been sent to your phone number: <valid phone number from
previous page>, please enter in the following box and submit for confirmation:
Text box for OTP and 'Validate' button.
● If the number matches the random number generated earlier, replace the OTP form with a 'Validation
Successful!' and redirect the user to pixel6 home page.
● else reset this OTP form and ask the user to reenter. If a user fails to enter the right number in 3 attempts,
redirect the user to 404 (page not found) page on Pixel6 web
