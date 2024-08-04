export interface CollaboratorResponse {
  collaborator: {
    id: string;
    code: string;
  };
}

interface PropsCreateCollaborator {
  code: string;
}

export async function createCollaborator(collaborateData: PropsCreateCollaborator): Promise<CollaboratorResponse> {
  const apiUrl = process.env.REACT_APP_API_URL;

  const response = await fetch(`${apiUrl}/collaborator`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(collaborateData),
  });

  if (!response.ok) {
    throw new Error("Falha ao criar colaborador! Por favor tente mais tarde");
  }

  return response.json();
}
