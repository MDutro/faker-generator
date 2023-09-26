const { faker } = require("@faker-js/faker");
const { writeFile } = require("fs");
const { getRandomValuesString, getDates } = require("./utils")
const { Parser } = require("@json2csv/plainjs");

const filePath = "./fakeIndianaLeads.csv";

// Partner orgs 
// We loop through these and create a number of records per partner org
const partnerOrgs = ["Adult and Child Health","Bethany Christian Services","Centerstone's Foster Care Select","Childplace, Inc.","Choices Foster Care Solutions","Damar Foster Care Services","Debra Corn Foster Care","Dockside Services, LLC","Family Ark Inc","Firefly Children & Family Alliance","For The Children","FosterHope of Meridian Health Services","Hands of Hope","Hope House","Indiana Department of Child Services","Indiana GAL/CASA","Indiana Kids Belong","Indiana MENTOR","Interact Family Services","Isaiah 117 House","Josiah White's","Lost Sparrows","National Youth Advocate Program","Nightlight Christian Adoptions","Open Arms Family and Educational Services (AKA: Open Arms Christian Ministries)","Orphan Care Alliance","SAFY of Indiana","StepStone Family & Youth Services","The Cooper House","The Isaiah 1:17 Project","The Villages of Indiana"]
// Arr with only one org for testing purposes
//const partnerOrgs = ["Connected Foster Care"]

// Const arrays for certain json fields
const partnersRaceEthnicity = ["948010005", "9489010006", "948010007", "948010008", "948010009", "948010010", "948010011", "948010012"]
const canSpeakLanguage = ["948010000", "948010001", "948010002", "100000000"]
const familySupport = ["948010000", "948010001", "948010002"]
const openToFostering = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "9489010006", "948010007", "948010008", "948010009", "948010010", "948010011"] 
const engagementInterest = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010009"]
const raceEthnicity = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "948010006", "948010007"]
const ageWillingToFoster = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "9489010006"]
const ageRangeWillngToAdopt = ["948010000", "948010001", "948010002", "948010003"]
const frequency = ["948010000", "948010001", "948010002"]
const organizationType = ["948010000", "948010001", "948010002", "94801003"]
const training = ["948010000", "948010001", "948010002", "948010003"]
const directChildInvolvement = ["948010000", "948010001", "948010002", "948010003", "948010004"]
const serviceProject = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005"]
const respiteLicensing = ["948010000", "948010001", "948010002"]
const organizationSize = ["948010000", "948010001", "948010002"]
const familiesInMyArea = ["948010000", "948010001", "948010002"]
const ecInquirySource =  ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "9489010006", "948010007", "948010008", "948010009", "948010010", "948010011", "948010012", "948010013", "948010014", "948010015", "948010016", "948010017", "948010018", "948010019", "948010020", "948010021", "948010022", "948010023", "948010024", "948010025", "948010026", "948010027", "948010028", "948010029",]
const childLevelOfNeed = ["948010000", "948010001", "948010002", "948010003", "948010004"]
const donateTangibleItem = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "9489010006"]
const volunteerType = ["948010000", "948010001", "948010002", "948010003"]
const servicesAndSupportsOffered = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005", "9489010006"]
const pace = ["948010000", "948010001", "948010002", "948010003"]
const organizationTypeFilter = ["948010000", "948010001", "948010002", "948010003", "948010004", "948010005"]


let person = () =>  {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  }
};

let record = () => {
  const time = new Date();

  let lead = person();
  let partner = person();
  let dates = getDates();

  return {
    "Inquiry Source Other Text": "inqSourceOther",
    "Partner's Race/Ethnicity": getRandomValuesString(partnersRaceEthnicity, "948010011"),
    "State": "Indiana",
    "County": "COUNTY",
    "Foster Age Range: 2-5 Years": faker.datatype.boolean(0.5),
    "Transportation?": faker.datatype.boolean(0.5),
    "Inquiring on behalf of Business/Org": faker.datatype.boolean(0.5),
    "Optional Comment": "commentText", 
    "Source URL": "https://evrychildindev.wpengine.com/connect/",
    "Partner's DOB": faker.date.birthdate(),
    "Can Speak Language Other Text": "langOther",
    "Open to Siblings": faker.number.int({min: 948010000, max: 948010002}),
    "# of Kids willing to foster at one time": faker.number.int({min: 948010000, max: 948010004}),
    "Training": getRandomValuesString(training),
    "Licensed Foster Parent": faker.datatype.boolean(0.5),
    "Phone": faker.phone.number("+1555####"),
    "Multiple Organizations?": faker.datatype.boolean(0.5),
    "Eligible?": faker.datatype.boolean(0.5),
    "Name": `${lead.firstName} ${lead.lastName}`,
    "Application Submitted?": faker.datatype.boolean(0.5),
    "Interest: Fostering": faker.datatype.boolean(0.5),
    "Willing to do Background Check": faker.datatype.boolean(0.5),
    "Background Check": faker.datatype.boolean(0.5),
    "DCFS Sync Status": "Assigned",
    "Time Zone Rule Version Number": 0,
    "Background Check Approved": faker.datatype.boolean(0.5),
    "Can Speak Language": getRandomValuesString(canSpeakLanguage),
    "Partner's First Name": partner.firstName,
    "Foster Interest Timeline": faker.number.int({min: 948010000, max: 948010001}),
    "Foster Organization": "PARTNER ORG GOES HERE!!!",
    "Home Study": faker.datatype.boolean(0.5),
    "Status": 0,
    "Number of Bedrooms": faker.number.int({min: 948010000, max: 948010003}),
    "Relationship Status": faker.number.int({min: 948010000, max: 948010003}),
    "Family Support": getRandomValuesString(familySupport),
    "Foster Age Range: 13-14 Years": faker.datatype.boolean(0.5),
    "Last Name": lead.lastName,
    "Volunteer Motivation": "motivationText",
    "Direct Child Involvement": getRandomValuesString(directChildInvolvement),
    "State Region": "REGION",
    "Foster Pre App Submitted": faker.datatype.boolean(0.5),
    "First Name": lead.firstName,
    "Partner Organization Type": faker.number.int({min: 948010000, max: 948010002}),
    "Email": faker.internet.email({firstName: lead.firstName, lastName: lead.lastName}),
    "Faith based?": faker.datatype.boolean(0.5),
    "Children in Household": faker.number.int({min: 948010000, max: 948010008}),
    "Individual or Group Volunteer": faker.number.int({min: 948010000, max: 948010001}),
    "Open to fostering": getRandomValuesString(openToFostering, "948010000"),
    "Citizenship": faker.datatype.boolean(0.5),
    "Interest: Volunteering": faker.datatype.boolean(0.5),
    "Partner's Race: Other Text": "partnerRaceOther",
    "Partner's Last Name": partner.lastName,
    "Sexual Orientation": faker.number.int({min: 948010000, max: 948010007}),
    "OK to Text": faker.datatype.boolean(0.5),
    "Foster Age Range: 11-12 Years": faker.datatype.boolean(0.5),
    "Organization Type": getRandomValuesString(organizationType),
    "Foster Age Range: 9-10 Years": faker.datatype.boolean(0.5),
    "School District": "Indiana Area School District",
    "Service Project": getRandomValuesString(serviceProject),
    "Over 21": faker.datatype.boolean(0.5),
    "Date of Birth": faker.date.birthdate(),
    "Partner's Gender": faker.number.int({min: 948010000, max: 948010003}),
    "Inquiry Closed?": faker.datatype.boolean(0.5),
    "Respite Licensing": getRandomValuesString(respiteLicensing),
    "Guidance Requested: Provide Tangible Goods": faker.datatype.boolean(0.5),
    "Engagement Interest": getRandomValuesString(engagementInterest),
    "Organization Size": getRandomValuesString(organizationSize),
    "City": "CityName",
    "Families in My Area": getRandomValuesString(familiesInMyArea), 
    "Languages: Other": faker.datatype.boolean(0.5),
    "Volunteer Information Form Submitted": faker.datatype.boolean(0.5),
    "Inquiry Source": getRandomValuesString(ecInquirySource),
    "Relationship Status Other Text": "relationshipStatusOther",
    "Faith Affiliate Name": "AffiliateName",
    "Gender of Child ": faker.number.int({min: 948010000, max: 948010002}).toString(),
    "Languages: English": faker.datatype.boolean(0.5),
    "Foster Age Range: 15-17 Years": faker.datatype.boolean(0.5),
    "Guidance Requested: Adopting": faker.datatype.boolean(0.5),
    "Volunteer Distance": faker.number.int({min: 948010000, max: 948010004}),
    "Interest: Adopting": faker.datatype.boolean(0.5),
    "Volunteer Frequency": faker.number.int({min: 948010000, max: 948010002}),
    "Race/Ethnicity": getRandomValuesString(raceEthnicity, "948010006"),
    "Child's Level of Need": getRandomValuesString(childLevelOfNeed, "948010004"),
    "Faith Community/Church or Business": faker.datatype.boolean(0.5),
    "Gender": [844060001, 844060000, 799880000, 799880001, 844060002][(Math.floor(Math.random() * 5))],
    "Adults in Household": faker.number.int({min: 948010000, max: 948010003}),
    "UTC Conversion Time Zone Code": 20,
    "Version Number": 156644494,
    "Donate Tangible Item": getRandomValuesString(donateTangibleItem),
    "Group Size": 10,
    "Earned Lead Source": faker.number.int({min: 948010000, max: 948010002}),
    "Race/Ethnicity Other Text": "raceOther",
    "Child You Know": "nameText",
    "Initiative ECAR": 0,
    "Government Assistance?": faker.datatype.boolean(0.5),
    "Foster Age Range: 6-8 Years": faker.datatype.boolean(0.5),
    "Initiative": "Every Child Indiana",
    "Faith Community/Church Name": "ChurchName",
    "Foster/Adopt a Child You Know?": faker.datatype.boolean(0.5),
    "Guidance Requested: Fostering": faker.datatype.boolean(0.5),
    "Area": "AREA Northern, Southern, Central",
    "Volunteer Type": getRandomValuesString(volunteerType),
    "Faith Affiliation": faker.datatype.boolean(0.5),
    "Age Range Willing to Foster": getRandomValuesString(ageWillingToFoster),
    "Services and Supports Offered": getRandomValuesString(servicesAndSupportsOffered),
    "Pace": getRandomValuesString(pace),
    "Zip Code": "ZIPCODE",
    "Organization Type Filter": getRandomValuesString(organizationTypeFilter, "948010004"),
    "Age Range Volunteer": faker.number.int({min: 948010000, max: 948010003}),
    "Adoption Pre App Submitted ": faker.datatype.boolean(0.5),
    "Age Range Willing to Adopt": getRandomValuesString(ageRangeWillngToAdopt),
    "Frequency": getRandomValuesString(frequency),
    "Foster Age Range: Birth - 23 Months": faker.datatype.boolean(0.5),
    "Record Aging": Math.floor(Math.random() * (122 - 1) + 1),
    "Home Address": faker.location.streetAddress(true),
    "Guidance Requested: Volunteering": faker.datatype.boolean(0.5),
    "Lifecycle Status": [984010000, 948010002, 984010003][(Math.floor(Math.random() * 3))],
    "Languages: Spanish": faker.datatype.boolean(0.5),
    "Inquiry Date": dates[0],                   //inquiry date 1st
    "Active Date": dates[1],                   // 2nd
    "Assigned Date": dates[2],                 // 3rd
    "Initial Contact Made Date": dates[3],     // 75% 4th
    "In Progress Date": dates[3],              // same as initial contact date
    "Certification Approval Date": dates[4],   // 10% 5th
    "Reassign Request Date": dates[5],         // 10% 6th
    "Certified Lifecycle Date": dates[4],      // ??? same as 5th??
    "On Hold Date": dates[6],                  // 10% 
    "Off Hold Date":  dates[7]                 // should probably be after on hold date 8th
  }
};

// Loop through list of partner orgs and make 20 records per org
let recordList = [];

partnerOrgs.forEach(partnerOrg => {
  // Change the 20 to the number of records you want per partner org
  for (let i = 0; i < 150; i++) {
    let newRecord = record();
    newRecord._tc_fosterorganization_value = partnerOrg;
    recordList.push(newRecord);
  }
});

// Convert from JSON to CSV
let csv;
try {
  const parser = new Parser();

  csv = parser.parse(recordList);
  console.log(csv);
} catch (err) {
  console.error(err);
}

// Write CSV to a file
writeFile(filePath, csv, err => {
    if(err) {
        console.log("An error has occurred", err);
        return;
    }
    console.log("Data written successfully to disk");
})

//console.log(getRandomValuesString(raceEthnicity, "948010006"))