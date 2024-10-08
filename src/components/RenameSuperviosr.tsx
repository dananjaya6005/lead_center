//@ts-nocheck
import React from 'react'
import { Input } from 'antd';
import { Button, message, Space } from 'antd';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://cesqkzvbgbrrplvqyxht.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlc3FrenZiZ2JycnBsdnF5eGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NTE4MzcsImV4cCI6MjAzMDAyNzgzN30.600n14gALPH0BCqwubQXaN-Ruh34k-FeENficUgcJFg')


const data = {
  leadID : Math.floor(Math.random() * 10000000000),
  organization_name: 'DMS',
  fullName: Math.random().toString(36).substring(7),
  phone: '0718843104',
  supivisor_userName : 'pahan_652'
}


const phoneNumber = '0718843104'
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 'Paul', 'Quincy', 'Rita', 'Sam', 'Tina', 'Uma', 'Vince', 'Wendy', 'Xander', 'Yara', 'Zane']


export const RenameSuperviosr = () => {

  async function addLead() {

    const rows = Array(100).fill(data) 

    const { error } = await supabase
    .from('leads')
    .insert(rows)

    if (error) {
        console.error('error', error)
        return

  }
}


    async function renameSupervisor() {

        const { data , error } = await supabase
        .from('leads')
        .update({ supivisor_userName : 'supervisor-epl-1,saranga-ep_11,kasuni-ep_12'})
        .eq('supivisor_userName','supervisor-epl-1');
        console.log(data)   
        if (error) {
            console.error('error', error)
            return
        }else {
            console.log('updated successfully')
        }

    }


    async function insertMultipleRows() {
      const phoneNumber = '0718843104'
      const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Jack', 'Kathy', 'Leo', 'Mona', 'Nina', 'Oscar', 'Paul', 'Quincy', 'Rita', 'Sam', 'Tina', 'Uma', 'Vince', 'Wendy', 'Xander', 'Yara', 'Zane']
    
      for (let i = 0; i < 100; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)]
        const data = {
          leadID : Math.floor(Math.random() * 10000000000),
          organization_name: 'DMS',
          fullName: randomName,
          phone: phoneNumber,
          supivisor_userName : 'pahan_652'

        }
    
        const { error } = await supabase
          .from('leads')
          .insert([data])
    
        if (error) {
          console.error('Error inserting row:', error)
        } else {
          console.log('Row inserted successfully:', data)
        }
      }
    }

    
  return (
    <>
    <div className='w-1/2'>
    <Button onClick={ insertMultipleRows} type="primary">Rename</Button>
    </div>
    </>
  )
}
