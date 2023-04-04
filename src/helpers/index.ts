import bcrypt from 'bcrypt';

export const hash = async (password:string) =>{
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export const compare = async (password:string,hash:string) =>{
  const match = bcrypt.compare(password,hash);
  return match;
}