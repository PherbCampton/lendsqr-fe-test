export const getAllUsers = async () => {
  try {
    const response = await fetch("/api/auth/login");

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An Error Occurred");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "An Error Occurred");
    } else {
      throw new Error("An Error Occurred");
    }
  }
};
