import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    appName: 'Piston',

    // Temp Text
    tempname: 'Rojar marei',
    tempAddress : 'Universidad Nacional Autónoma de Honduras',
    tempNumber : '+504 987564321',

    //Common Text
    skip: 'Skip',
    next : 'Next',
    letsStart: "Let's Start",
    welcome: "Welcome!",
    signIn: 'Sign In',
    signUp: 'Sign Up',
    createAccount: "Create Account",
    signInWithApple: 'Sign in with Apple',
    newUser: 'New User?',
    newcrateAccount: "Let's create your account",
    alreadyRegister: "Already Registered ?",
    login: "Login",
    enterOTP: "Enter 4 Digit Code",
    verify: "Verify",
    send: "Send",
    viewAllAds: "View All ADS",
    email: 'Email',
    mobile: 'Mobile Number',
    change_pass : 'Change Password',
    change_language : 'Change Language',
    settigs : 'Settings',
    update : 'Update',
    change : 'Change',
    details : 'Details',
    reviews : 'Reviews',
    
    //Home Text
    view_buy_sell: "Vehicles Buy & Sell",
    buy_spareparts: "Buy Spare Parts",
    genral_services: "General Services",

    //Setting Text
    my_vehicals: 'My Vehicles',
    notifications : 'Notifications',
    rate_the_app : 'Rate the App',
    share_the_app : 'Share the App',
    help_faq : 'Help & FAQ',
    terms_conditions : 'Terms and Condition',
    privacy_policy : 'Privacy Policy',
    contact_us : 'Contact Us',
    logout : 'Logout',

    //Header Text
    watchlist : 'Watch list',
    recentChat : 'Recent Chat',
    verification: 'Verification',
    forgotPass: 'Forgot Password',
    emergency: 'Emergency',
    profile: 'Profile',
    edit_profile: 'Edit Profile',
    adsDetails: 'ADS Details',

    // App Used Text
    tutorial_title_1: "Vehicles Buy & Sell",
    tutorial_title_2: "Buy Spare Parts",
    tutorial_title_3: "General Services",
    tutorial_title_4: "Emergency Services",
    tutorial_msg_1: "Easy to use Buy and Sell Services using our application of Piston",
    tutorial_msg_2: "User can easy to buy Spare parts of needed car with reasonable price",
    tutorial_msg_3: "User can provide general services of vehicle you will book appointment.",
    tutorial_msg_4: "Our app Also provided emergency services like tow truck, Mechanics etc.",
    bookingMsg : 'Please be present at service center before 15 min of you scheduled time.',
    waitingMsg : 'Your appointment is been scheduled. Please wait for the service provider to confirm appointment. We will notify you for the same.',
    login_msg: "Then you should sign in. We promise you won't regret this!",
    signin_msg: "Please login to continue using our app.",
    signup_msg: "We need your account information.",
    agreeText: "I agree Terms and Conditions",
    termsAndcondition: "By continuing you agree to Terms & Conditions and Privacy Policy",
    verification_msg: "We have sent a verification code to",

    // Dummy Text
    dummy_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum ullamcorper luctus diam ornare proin. Viverra egestas potenti nunc habitant nibh tincidunt arcu. Elementum elit tellus senectus a ultrices sed. Mi ullamcorper at enim, sollicitudin ante. Non felis posuere ullamcorper elementum. Rhoncus mattis massa commodo maecenas. Vel erat mauris tempor phasellus libero rhoncus. Fringilla ultrices sed malesuada consequat suspendisse. Lorem magna elementum arcu mi sed. Viverra egestas potenti nunc habitant nibh tincidunt arcu. Elementum elit tellus senectus a ultrices sed.",
    dummy_text_small: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum ullamcorper luctus diam ornare proin. ",

    // Validation Messages 
    messageEmptyEmail: "Please Enter Email Address",
    messageEmptyPassword: "Please Enter Password",
    messageEmptyFirstname: "Please Enter FirstName",
    messageEmptyLastname: "Please Enter LastName",
    messageEmptyPhonenumber: "Please Enter LastName",
    messageEmptyAccountName: "Please Enter Account Name",
    messageEmptyBSBNumber: "Please Enter BSB Number",
    messageEmptyAccountNumber: "Please Enter Account Number",
    messageEmptyABN: "Please Enter ABN",
    messageInvalidName: "Plase Enter Valid Name",
    messageInvalidEmail: "Invalid Email Address",
    messageInvalidPhone: "Invalid Phone Number",
    messageInvalidAccountName: "Invalid Account Name",
    messageInvalidBSBNumber: "Invalid BSB Number",
    messageInvalidAccountNumber: "Invalid Account Number",
  },
  
  // Other Language Text Here .. 
  de: {
    appName: 'Piston',
  }
};
export default new LocalizedStrings(translations);