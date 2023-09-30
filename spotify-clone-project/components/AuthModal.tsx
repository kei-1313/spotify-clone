"use client";

import { 
  useSessionContext, 
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { useRouter } from 'next/navigation';

import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { session } = useSessionContext();
  const {onClose, isOpen} = useAuthModal();
  
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }
  
  return (
    <div>
      <Modal
        title="Welcome back" 
        description="Login to your account." 
        isOpen={isOpen}
        onChange={onChange} 
      >
        <Auth
          supabaseClient={supabaseClient}
          providers={['github']}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#404040',
                  brandAccent: '#22c55e'
                }
              }
            }
          }}
          theme="dark"
        />
      </Modal>
    </div>
  )
}

export default AuthModal