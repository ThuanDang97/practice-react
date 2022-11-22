export const postData = async <T>(url: string, requestData: T) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  };

  return await fetch(url, config);
};
