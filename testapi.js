const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "fc4edc8e45f568cf6fc93c3ac6b71d38-us11",
  server: "us11",
});

// const run = async () => {
//     // const response = await mailchimp.lists.getAllLists();
//     // console.log(response);
//     // const response = await mailchimp.lists.getList("e6206f74ce");
//     // console.log(response);

// const response = await mailchimp.lists.getListMembersInfo("e6206f74ce");
//   console.log(response);
//   };
//   run();


const run = async () => {
    const response = await mailchimp.lists.addListMember("e6206f74ce", {
      email_address: "fau43534hv1@gmail.com",
      status: "subscribed",
      merge_fields: {
        FNAME: "deemc",
        LNAME: "Square",
      }
    });
    console.log(response);
  };
  
  run();
  