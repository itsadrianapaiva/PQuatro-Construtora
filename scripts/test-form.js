const axios = require("axios");

async function testForm() {
  try {
    const response = await axios.post(
      "http://localhost:8888/.netlify/functions/submit-form",
      {
        name: "Teste semanal",
        email: "teste@exemplo.com",
        phone: "67999999999",
        message: "Teste semanal do formulario",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200 && response.data.message === "Formulário enviado com sucesso!") {
      console.log("Form test passed!");
      process.exit(0);
    } else {
      console.error("Form test failed: Unexpected response");
      process.exit(1);
    }
  } catch (error) {
    console.error("Form test failed:", error.message);
    process.exit(1);
  }
}

testForm();