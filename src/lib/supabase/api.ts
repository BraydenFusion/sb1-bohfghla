import { supabase } from './client';

export async function fetchAllData(tableName: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select('*');
    
  if (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
  
  return data;
}

export async function insertData(tableName: string, data: any) {
  const { data: result, error } = await supabase
    .from(tableName)
    .insert(data)
    .select();
    
  if (error) {
    console.error('Error inserting data:', error);
    throw error;
  }
  
  return result;
}

export async function updateData(tableName: string, id: string, data: any) {
  const { data: result, error } = await supabase
    .from(tableName)
    .update(data)
    .eq('id', id)
    .select();
    
  if (error) {
    console.error('Error updating data:', error);
    throw error;
  }
  
  return result;
}

export async function deleteData(tableName: string, id: string) {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}