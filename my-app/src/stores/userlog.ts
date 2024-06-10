// stores/useUserStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import type { User } from '@supabase/supabase-js';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  async function fetchUser() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      user.value = data.user;
    } catch (error: any) {
      console.error('Error fetching user:', error.message);
      user.value = null;
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      user.value = null;
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    }
  }

  return { user, fetchUser, signOut };
});
