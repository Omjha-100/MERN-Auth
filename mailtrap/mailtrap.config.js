import { MailtrapClient } from "mailtrap"; // ES module import
import dotenv from "dotenv"; // ES module import

dotenv.config(); // Load environment variables from .env file



export const mailtrapClient = new MailtrapClient({ token:process.env.MAILTRAP_TOKEN

});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Saurav Kumar",
};

// const recipients = [
//   {
//     email: "saurav8261@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log)
//   .catch(console.error);

