interface ApiResponse {
  responseCode: number;
  message?: string;
  response?: Record<string, any>;
}

export const handleApiResponse = (response: ApiResponse) => {
  if (response.responseCode !== 2000) {
    throw new Error(response.message || "An error occurred");
  }
  return response;
};
