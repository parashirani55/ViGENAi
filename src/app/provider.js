'use client';
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { db } from '@/configs/db'
import { Users } from '@/configs/schema'
import { eq } from 'drizzle-orm';

function Provider({children}) {

  const {user} = useUser();

  useEffect(() => {
    const isNewUser = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;
      const result = await db.select().from(Users).where(eq(Users.email, user.primaryEmailAddress.emailAddress));

      if (!result[0]) {
        await db.insert(Users).values({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          imageUrl: user.imageUrl
        });
      }
    };
    isNewUser();
  }, [user]);

  return (
    <div>
        {children}
    </div>
  )
}

export default Provider
