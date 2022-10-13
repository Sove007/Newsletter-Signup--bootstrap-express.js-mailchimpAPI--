const client = require("mailchimp-marketing");

client.setConfig({
  apiKey: "fc4edc8e45f568cf6fc93c3ac6b71d38-us11",
  server: "us11",
});

const run = async () => {
  const response = await client.lists.batchListMembers("list_id", {
    members: [{}],
  });
  console.log(response);
};

run();
