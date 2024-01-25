
export const getIndex = async (req, res) => {
  try {
    res.send("All right");
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

