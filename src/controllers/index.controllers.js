export const getUsers = async (req, res) => {
  try {
    res.send("Users");
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

