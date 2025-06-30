import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://keyvzokbnjqbaijygiiy.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey!)

/**
 * Fetches the list of channel names from the 'channels' table in Supabase.
 * 
 * @returns a Promise that resolves to an array of channel names (string).
 * If there's an error during the fetch, logs the error and returns undefined.
 * 
 * @example
 * getChannels()
 *   .then(names => {
 *     if (names) {
 *       console.log('Channel names:', names)
 *     }
 *   })
 */
export async function getChannels(): Promise<string[] | null> {
  // 'channels' is an array of objects, each containing a 'name' string property.
  // NOTE: 'channels' will never be empty.
  const { data: channels, error } = await supabase.from('channels').select('name')

  if (error) {
    console.error('Error:', error)
    return null
  }

  return channels.map(channel => channel.name)
}