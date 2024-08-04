interface PropsCreateShift {
  collaboratorCode: string;
  point: Date;
}

export async function createShift(pointData: PropsCreateShift) {
  const apiUrl = process.env.REACT_APP_API_URL;

  const response = await fetch(`${apiUrl}/shift`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pointData),
  });

  if (!response.ok) {
    throw new Error("Falha ao bater o ponto! Por favor tente mais tarde");
  }
}
