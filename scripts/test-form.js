const axios = require("axios");

async function testForm() {
  try {
    const formData = {
      name: "Teste Semanal",
      email: "teste@exemplo.com",
      phone: "67999999999",
      message: "Teste semanal do formulário",
      isTest: true,
    };
    console.log("Submitting:", formData);

    const response = await axios.post(
      process.env.FORM_URL ||
        "http://localhost:8888/.netlify/functions/submit-form",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    console.log("Response status:", response.status);
    console.log("Response data:", response.data);

    if (
      response.status === 200 &&
      response.data.message === "Form submitted successfully"
    ) {
      console.log("Form test passed!");
      process.exit(0);
    } else {
      console.error("Form test failed: Unexpected response");
      process.exit(1);
    }
  } catch (error) {
    console.error("Form test failed:", error.message);
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    process.exit(1);
  }
}

testForm();
