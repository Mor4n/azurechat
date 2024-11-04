export const fetchCustomQnA = async (question: string) => {
    const response = await fetch(`https://${process.env.AZURE_LANGUAGE_ENDPOINT_NAME}.cognitiveservices.azure.com/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": process.env.AZURE_LANGUAGE_API_KEY,
      },
      body: JSON.stringify({ question }),
    });
  
    const result = await response.json();
  
    return {
      answer: result.answers[0].answer,
      confidence: result.answers[0].confidenceScore * 100, // Convertimos a porcentaje
    };
  };
  