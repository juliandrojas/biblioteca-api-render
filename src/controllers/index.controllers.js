//import db from '../db/connection.js';
//Create
export const create = (req, res) => {
  res.send("Creando empleado")
}
//Read
export const read = (req, res) => {
  res.send("Obteniendo empleados")
}
//Update
export const update = (req, res) => {
  res.send("Actualizando empleado")
};
//Create
/*export const createUser = async (req, res) => {
  //Destructuring the response
  const { name, email, password } = req.body;
  db.query('INSERT INTO users (name, email, password) VALUES (?, ?)', [name, email, password]);
  if(error) {
    console.log("Error al crear el usuario: "+error);
    res.status(500).send("Error interno del servidor");
  } else {
    res.status(201).json({ id: result.insertId, name, email, password });
  }
}*/
// export const getUsers = async (req, res) => {
//   try {
//     //Consultar datos desde Supabase
//     const { data: users, error } = await supabase
//       .from('users')
//       .select('*');
//     if (error) {
//       throw new Error(error.message);
//     }
//     console.log(users);
//     res.json(users);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// export const getUserById = async (req, res) => {
//   try {
//     // Suponiendo que el ID está en los parámetros de la solicitud
//     const userId = req.params.id;

//     const { data: users, error } = await supabase
//       .from('users')
//       .select('*')
//       .eq('id', userId);

//     if (error) {
//       throw new Error(error.message);
//     }

//     if (users && users.length > 0) {
//       res.json(users[0]); // Devolver el primer usuario encontrado (puede haber solo uno)
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


// export const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const { data, error } = await supabase
//       .from('users')
//       .insert([{ name, email, password }])
//       .select();

//     if (error) {
//       throw new Error(error.message);
//     }

//     // Verificar si se ha registrado al menos un usuario
//     if (data && data.length > 0) {
//       const newUser = data[0];
//       res.status(201).json({ message: 'User Created', user: newUser });
//     } else {
//       res.status(500).json({ error: 'Failed to create user' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


// export const updateUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const { name, email, password } = req.body;

//     // Realizar la actualización en Supabase
//     const { error: updateError } = await supabase
//       .from('users')
//       .update({ name, email, password })
//       .eq('id', userId);

//     if (updateError) {
//       throw new Error(updateError.message);
//     }

//     // Consultar el usuario actualizado después de la actualización
//     const { data: updatedUser, error: queryError } = await supabase
//       .from('users')
//       .select('*')
//       .eq('id', userId);

//     if (queryError) {
//       throw new Error(queryError.message);
//     }

//     if (updatedUser && updatedUser.length > 0) {
//       res.json(updatedUser[0]); // Devolver el usuario actualizado
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
