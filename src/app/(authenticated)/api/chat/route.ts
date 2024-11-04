import { ChatAPIEntry } from "@/features/chat-page/chat-services/chat-api/chat-api";
import { UserPrompt } from "@/features/chat-page/chat-services/models";

export async function POST(req: Request) {
  const formData = await req.formData();
  const content = formData.get("content") as unknown as string;
  const multimodalImage = formData.get("image-base64") as unknown as string;

  const userPrompt: UserPrompt = {
    ...JSON.parse(content),
    multimodalImage,
  };

  return await ChatAPIEntry(userPrompt, req.signal);
}

/*


ChatAPIEntry: Este es el punto de entrada del servicio de chat. Probablemente representa la lógica principal para procesar mensajes de chat.
UserPrompt: Un modelo que representa el mensaje que el usuario envía, incluyendo el texto y posiblemente otras modalidades (como imágenes).
Función POST:

Esta función se ejecuta cada vez que el frontend envía una solicitud POST a esta ruta.
Recibe el contenido del formulario que envía el usuario (incluyendo el texto del mensaje y una imagen en formato base64, si la hay).
Proceso:

Obtiene el contenido del mensaje (content) y la imagen en base64 (image-base64) del formulario.
Luego, crea un objeto userPrompt con los datos del mensaje del usuario, incluyendo la imagen, en el formato esperado por ChatAPIEntry.
Llamada a ChatAPIEntry:

Finalmente, pasa el userPrompt (que contiene el texto y la imagen) a la función ChatAPIEntry, junto con una señal (req.signal) que ayuda a controlar la solicitud.
ChatAPIEntry se encarga de procesar el mensaje y devolver la respuesta, que se enviará de vuelta al frontend.

*/