const API = `https://lendsqr-cnf9.onrender.com/lendsqr/v2`;
console.log(API);

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    email: string;
    token: string;
  };
  token: string;
  message: string;
}

export const login = async (data: LoginParams): Promise<LoginResponse> => {
  try {
    console.log(data);
    const response = await fetch(`${API}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const responseData: LoginResponse = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Login failed");
    } else {
      throw new Error("Login failed");
    }
  }
};
