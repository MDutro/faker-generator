const { faker } = require("@faker-js/faker");
const { writeFile } = require("fs");
const { getRandomValuesString, getDates } = require("./utils")
const { Parser } = require("@json2csv/plainjs");

const filePath = "./fakeIndianaLeads.csv";

// Partner orgs
// We loop through these and create a number of records per partner org
const partnerOrgs = ["Connected Foster Care", "Firefly Children & Family Alliance", "For The Children", "Hands Of Hope", "Hope House", "Indiana GAL/CASA", "Indiana Kids Belong", "Isaiah 117 House", "Lost Sparrows", "Orphan Care Alliance", "The Cooper House", "The Isaiah 1:17 Project"]
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
    "tc_ecinquirysourceothertext": "inqSourceOther",
    "tc_partnersraceethnicity": getRandomValuesString(partnersRaceEthnicity, "948010011"),
    "_tc_stateid_value": "Indiana",
    "_tc_county_value": "COUNTY",
    "tc_fosteragerange2to5years": faker.datatype.boolean(0.5),
    "tc_transportation": faker.datatype.boolean(0.5),
    "tc_inquiringonbehalfofbusinessorg": faker.datatype.boolean(0.5),
    "tc_optionalcomment": "commentText", 
    "tc_sourceurl": "https://evrychildindev.wpengine.com/connect/",
    "tc_partnersdob": faker.date.birthdate(),
    "tc_canspeaklanguageothertext": "langOther",
    "tc_opentosiblings": faker.number.int({min: 948010000, max: 948010002}),
    "tc_ofkidswillingtofosteratonetime": faker.number.int({min: 948010000, max: 948010004}),
    "tc_training": getRandomValuesString(training),
    "tc_licensedfosterparent": faker.datatype.boolean(0.5),
    "tc_phonenumber": faker.phone.number("+1555####"),
    "tc_multipleorganization": faker.datatype.boolean(0.5),
    "tc_eligible": faker.datatype.boolean(0.5),
    "tc_name": `${lead.firstName} ${lead.lastName}`,
    "tc_applicationsubmitted": faker.datatype.boolean(0.5),
    "tc_engagementinterestfostering": faker.datatype.boolean(0.5),
    "tc_willingtodobackgroundcheck": faker.datatype.boolean(0.5),
    "tc_backgroundcheck": faker.datatype.boolean(0.5),
    "tc_dcfssyncstatus": "Assigned",
    "timezoneruleversionnumber": 0,
    "tc_backgroundcheckapproved": faker.datatype.boolean(0.5),
    "tc_canspeaklanguage": getRandomValuesString(canSpeakLanguage),
    "tc_partnersfirstname": partner.firstName,
    "tc_fosterinteresttimeline": faker.number.int({min: 948010000, max: 948010001}),
    "_tc_fosterorganization_value": "PARTNER ORG GOES HERE!!!",
    "tc_homestudy": faker.datatype.boolean(0.5),
    "statecode": 0,
    "tc_numberofbedrooms": faker.number.int({min: 948010000, max: 948010003}),
    "tc_relationshipstatus": faker.number.int({min: 948010000, max: 948010003}),
    "tc_familysupport": getRandomValuesString(familySupport),
    "tc_fosteragerange13to14years": faker.datatype.boolean(0.5),
    "tc_lastname": lead.lastName,
    "tc_volunteermotivation": "motivationText",
    "tc_directchildinvolvement": getRandomValuesString(directChildInvolvement),
    "_tc_stateregion_value": "REGION",
    "tc_fosterpreappsubmitted": faker.datatype.boolean(0.5),
    "tc_firstname": lead.firstName,
    "tc_partnerorganizationtype": faker.number.int({min: 948010000, max: 948010002}),
    "tc_email": faker.internet.email({firstName: lead.firstName, lastName: lead.lastName}),
    "tc_faithbased": faker.datatype.boolean(0.5),
    "tc_childreninhousehold": faker.number.int({min: 948010000, max: 948010008}),
    "tc_individualorgroupvolunteer": faker.number.int({min: 948010000, max: 948010001}),
    "tc_opentofostering": getRandomValuesString(openToFostering, "948010000"),
    "tc_citizenship": faker.datatype.boolean(0.5),
    "tc_engagementinterestvolunteering": faker.datatype.boolean(0.5),
    "tc_partnersraceethnicityother": "partnerRaceOther",
    "tc_partnerslastname": partner.lastName,
    "tc_sexualorientation": faker.number.int({min: 948010000, max: 948010007}),
    "tc_oktotext": faker.datatype.boolean(0.5),
    "tc_fosteragerange11to12years": faker.datatype.boolean(0.5),
    "tc_organizationtype": getRandomValuesString(organizationType),
    "tc_fosteragerange9to10years": faker.datatype.boolean(0.5),
    "tc_schooldistrict": "Indiana Area School District",
    "tc_serviceproject": getRandomValuesString(serviceProject),
    "tc_over21": faker.datatype.boolean(0.5),
    "tc_dateofbirth": faker.date.birthdate(),
    "tc_partnersgender": faker.number.int({min: 948010000, max: 948010003}),
    "tc_inquiryclosed": faker.datatype.boolean(0.5),
    "tc_respitelicensing": getRandomValuesString(respiteLicensing),
    "tc_guidancerequestedprovidetangiblegoods": faker.datatype.boolean(0.5),
    "tc_engagementinterest": getRandomValuesString(engagementInterest),
    "tc_organizationsize": getRandomValuesString(organizationSize),
    "tc_city": "CityName",
    "tc_familiesinmyarea": getRandomValuesString(familiesInMyArea), 
    "tc_languagesother": faker.datatype.boolean(0.5),
    "tc_volunteerinformationformsubmitted": faker.datatype.boolean(0.5),
    "tc_ecinquirysource": getRandomValuesString(ecInquirySource),
    "tc_relationshipstatusothertext": "relationshipStatusOther",
    "tc_affiliatename": "AffiliateName",
    "tc_genderofchild": faker.number.int({min: 948010000, max: 948010002}).toString(),
    "tc_languagesenglish": faker.datatype.boolean(0.5),
    "tc_fosteragerange15to17years": faker.datatype.boolean(0.5),
    "tc_guidancerequestedadopting": faker.datatype.boolean(0.5),
    "tc_volunteerdistance": faker.number.int({min: 948010000, max: 948010004}),
    "tc_engagementinterestadopting": faker.datatype.boolean(0.5),
    "tc_volunteerfrequency": faker.number.int({min: 948010000, max: 948010002}),
    "tc_raceethnicity": getRandomValuesString(raceEthnicity, "948010006"),
    "tc_childslevelofneed": getRandomValuesString(childLevelOfNeed, "948010004"),
    "tc_faithcommunitychurchorbusiness": faker.datatype.boolean(0.5),
    "tc_gender": [844060001, 844060000, 799880000, 799880001, 844060002][(Math.floor(Math.random() * 5))],
    "tc_adultsinhousehold": faker.number.int({min: 948010000, max: 948010003}),
    "utcconversiontimezonecode": 20,
    "versionnumber": 156644494,
    "tc_donatetangibleitem": getRandomValuesString(donateTangibleItem),
    "tc_groupsize": 10,
    "tc_ecearnedleadsource": faker.number.int({min: 948010000, max: 948010002}),
    "tc_raceethnicityothertext": "raceOther",
    "tc_childyouknow": "nameText",
    "tc_initiativeecar": faker.datatype.boolean(0.5),
    "tc_governmentassistance": faker.datatype.boolean(0.5),
    "tc_fosteragerange6to8years": faker.datatype.boolean(0.5),
    "_tc_initiative_value": "Every Child Indiana",
    "tc_faithcommunitychurchname": "ChurchName",
    "tc_fosteradoptachildyouknow": faker.datatype.boolean(0.5),
    "tc_guidancerequestedfostering": faker.datatype.boolean(0.5),
    "_tc_area_value": ["Northern", "Southern", "Central"][(Math.floor(Math.random() * 3))],
    "tc_volunteertype": getRandomValuesString(volunteerType),
    "tc_affiliation": faker.datatype.boolean(0.5),
    "tc_agewillingtofoster": getRandomValuesString(ageWillingToFoster),
    "tc_servicesandsupportsoffered": getRandomValuesString(servicesAndSupportsOffered),
    "tc_pace": getRandomValuesString(pace),
    "_tc_zipcode_value": "ZIPCODE",
    "tc_organizationtypefilter": getRandomValuesString(organizationTypeFilter, "948010004"),
    "tc_agerangevolunteer": faker.number.int({min: 948010000, max: 948010003}),
    "tc_adoptionpreappsubmitted": faker.datatype.boolean(0.5),
    "tc_agerangewillingtoadopt": getRandomValuesString(ageRangeWillngToAdopt),
    "tc_frequency": getRandomValuesString(frequency),
    "tc_fosteragerangebirth23months": faker.datatype.boolean(0.5),
    "tc_recordaging": Math.floor(Math.random() * (122 - 1) + 1),
    "tc_homeaddress": faker.location.streetAddress(true),
    "tc_guidancerequestedvolunteering": faker.datatype.boolean(0.5),
    "tc_ecleadlifecyclestatus": [984010000, 948010002, 984010003][(Math.floor(Math.random() * 3))],
    "tc_languagesspanish": faker.datatype.boolean(0.5)
  }
};

// Loop through list of partner orgs and make 20 records per org
let recordList = [];

partnerOrgs.forEach(partnerOrg => {
  // Change the 20 to the number of records you want per partner org
  for (let i = 0; i < 20; i++) {
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