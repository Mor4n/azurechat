// services/customQnA.ts
export const fetchCustomQnA = async (question: string) => {
    const response = await fetch("TU_URL_DE_PREDICCIÓN_DE_CUSTOM_QNA", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": process.env.CUSTOM_QNA_API_KEY,
      },
      body: JSON.stringify({ question }),
    });
  
    const result = await response.json();
  
    return {
      answer: result.answers[0].answer,
      confidence: result.answers[0].confidenceScore * 100, // Convertimos a porcentaje
    };
  };
  