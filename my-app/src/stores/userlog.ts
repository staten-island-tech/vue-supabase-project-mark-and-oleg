// stores/useUserStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';

export const userLog = defineStore('user', () => {
  const user = ref(null);

  async function fetchUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      user.value = data.user;
    } catch (error) {
      console.error('Error fetching user:', error.message);
      user.value = null;
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      user.value = null;
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  }

  return { user, fetchUser, signOut };
});
